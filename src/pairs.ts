import { BigNumber } from 'bignumber.js'

import { call } from './call'
import { contractor } from './contractor'
import { Chain } from './chains'
import { toDecimal } from './utils'
import { getToken } from './tokens'
import routerAbi from './abis/router.json'
import pairAbi from './abis/pair.json'
import factoryAbi from './abis/factory.json'

interface IGetPairAddressArgs {
  chain: Chain
  token0Address: string
  token1Address: string
  routerAddress?: string
  factoryAddress?: string
}

interface IPairReserves {
    [key: string]: BigNumber
    lpTotalSupply: BigNumber
}

interface IGetPairReservesArgs {
  chain: Chain,
  address: string
}

interface IReserves {
  _reserve0: number
  _reserve1: number
}

export const getPairAddress = async ({
	chain,
	token0Address,
	token1Address,
	routerAddress,
	factoryAddress,
}: IGetPairAddressArgs): Promise<string> => {
	if(!factoryAddress && !routerAddress)
		throw Error('getPairAddress::Either router ou factory address must be provided')

	if (!factoryAddress) {
		const router = contractor({
			chain,
			abi: routerAbi,
			name: 'router',
			address: routerAddress,
		})

		factoryAddress = await call({
			chain,
			call: router.methods.factory()
		})
	}


	const factory = await contractor({
		chain,
		abi: factoryAbi,
		name: 'factory',
		address: factoryAddress,
	})

	return call({
		chain,
		call: factory.methods.getPair(token0Address, token1Address)
	})
}

export const getPairReserves = async ({
	chain,
	address
}: IGetPairReservesArgs): Promise<IPairReserves | null> => {
	const contract = contractor({
		name: 'pair',
		abi: pairAbi,
		address,
		chain,
	})

	const [rawToken0, rawToken1, reserves, rawTotalSupply] = await Promise.all([
		call<string>({ chain, call: contract.methods.token0() }),
		call<string>({ chain, call: contract.methods.token1() }),
		call<IReserves>({ chain, call: contract.methods.getReserves() }),
		call<number>({ chain, call: contract.methods.totalSupply() }),
	])

	const tokenAddress0 = rawToken0.toLowerCase()
	const tokenAddress1 = rawToken1.toLowerCase()

	const [token0, token1] = await Promise.all([
		getToken({ chain, address: tokenAddress0 }),
		getToken({ chain, address: tokenAddress1 }),
	])

	if (!token0 || !token1)
		return null

	return {
		[tokenAddress0]: toDecimal(reserves._reserve0, token0.decimals),
		[tokenAddress1]: toDecimal(reserves._reserve1, token1.decimals),
		lpTotalSupply: toDecimal(rawTotalSupply, 18),
	}
}
