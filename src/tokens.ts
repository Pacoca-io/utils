import { Chain } from './chains'
import { call } from './call'
import { contractor } from './contractor'
import erc20Abi from './abis/erc20.json'
import pairAbi from './abis/pair.json'

interface IGetTokenArgs {
  chain: Chain,
  address: string
}

export interface IToken {
		symbol: string
		name: string
		address: string,
		decimals: number,
		chain: Chain,
}

export const getPairInfo = async ({
	chain,
	address
}: IGetTokenArgs): Promise<IToken> => {
	const contract = contractor({
		chain,
		abi: pairAbi,
		address,
		name: 'pair'
	})

	const [name, decimals, token0, token1] = await Promise.all([
		call<string>({ chain, call: contract.methods.name() }),
		call<number>({ chain, call: contract.methods.decimals() }),
		call<string>({ chain, call: contract.methods.token0() }),
		call<string>({ chain, call: contract.methods.token1() }),
	])

	const [token0Info, token1Info] = await Promise.all([
		getToken({ chain, address: token0 }),
		getToken({ chain, address: token1 }),
	])

	return {
		symbol: `${token0Info.symbol}-${token1Info.symbol}`.toUpperCase(),
		name,
		address,
		decimals,
		chain,
	}
}

export const getERC20Info = async ({
	chain,
	address
}: IGetTokenArgs): Promise<IToken>  => {
	const contract = contractor({
		chain,
		abi: erc20Abi,
		address,
		name: 'erc20',
	})

	const [symbol, name, decimals] = await Promise.all([
		call<string>({ chain, call: contract.methods.symbol() }),
		call<string>({ chain, call: contract.methods.name() }),
		call<number>({ chain, call: contract.methods.decimals() }),
	])

	return {
		symbol,
		name,
		address,
		decimals,
		chain,
	}
}

export const isPair = async ({ address, chain }: IGetTokenArgs) => {
	try {
		const contract = contractor({
			name: 'pair',
			abi: pairAbi,
			address,
			chain,
		})

		await call({ chain, call: contract.methods.getReserves() })

		return true
	}
	catch (e) {
		return false
	}
}


export const getToken = async ({
	chain,
	address
}: IGetTokenArgs): Promise<IToken>  => {
	const pair = await isPair({ chain, address })

	return pair ? getPairInfo({ chain, address }) : getERC20Info({ chain, address })
}

