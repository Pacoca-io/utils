import { AVAX, BSC, ETH, FTM, POLY } from './chains'
import { tokens } from './tokens'

export const connectors = {
	[ETH]: [
		tokens[ETH].WETH,
		tokens[ETH].USDT,
		tokens[ETH].WBTC,
		tokens[ETH].USDC,
		tokens[ETH].DAI,
	],
	[BSC]: [
		tokens[BSC].WBNB,
		tokens[BSC].CAKE,
		tokens[BSC].USDT,
		tokens[BSC].BUSD,
		tokens[BSC].BTCB,
		tokens[BSC].ETH,
	],
	[POLY]: [
		tokens[POLY].WMATIC,
		tokens[POLY].WETH,
		tokens[POLY].USDT,
		tokens[POLY].BNB,
		tokens[POLY].USDC,
		tokens[POLY].BUSD,
	],
	[AVAX]: [
		tokens[AVAX].WAVAX,
		tokens[AVAX].WETH,
		tokens[AVAX].USDC,
		tokens[AVAX].USDT,
	],
	[FTM]: [
		tokens[FTM].WFTM,
		tokens[FTM].FETH,
		tokens[FTM].USDC,
		tokens[FTM].DAI,
		tokens[FTM].WBTC,
		tokens[FTM].FBTC,
		tokens[FTM].SPIRIT,
	]
}

