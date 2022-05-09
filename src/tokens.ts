import { BSC, ETH, AVAX, POLY, FTM } from './chains'
import { Chain } from './chains'
import { call } from './call'
import { contractor } from './contractor'
import erc20Abi from './abis/erc20.json'

export const tokens = {
	[BSC]: {
		WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
		PACOCA: '0x55671114d774ee99D653D6C12460c780a67f1D18',
		USDT: '0x55d398326f99059ff775485246999027b3197955',
		BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
	},
	[ETH]: {},
	[FTM]: {},
	[POLY]: {},
	[AVAX]: {},
}

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

export const getToken = async ({
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
