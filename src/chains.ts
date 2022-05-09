export const ETH = 1
export const BSC = 56
export const POLY = 137
export const FTM = 250
export const AVAX = 43114

export const chainData = {
	[ETH]: {
		rpc: 'https://rpc.ankr.com/eth/edb6df7929b65d63fb678ce9a22d6bafbb63baa5a2bfecb5277703cfe6cc7b46',
		coingecko: 'ethereum',
	},
	[BSC]: {
		rpc: 'https://bsc-dataseed1.binance.org/',
		rpcs: [
			'https://bsc-dataseed1.binance.org/',
			'https://bsc-dataseed2.binance.org/',
			'https://bsc-dataseed3.binance.org/',
			'https://bsc-dataseed4.binance.org/',
		],
		coingecko: 'binance-smart-chain',
		moralis: {
			key: 'bsc',
			prefix: 'Bsc',
		},
	},
	[POLY]: {
		rpc: 'https://polygon-rpc.com',
		coingecko: 'polygon-pos',
		moralis: {
			key: 'polygon',
			prefix: 'Polygon',
		},
	},
	[FTM]: {
		rpc: 'https://rpc.ftm.tools',
		coingecko: 'fantom',
		moralis: {
			key: 'fantom',
			prefix: 'Ftm',
		},
	},
	[AVAX]: {
		rpc: 'https://rpc.ankr.com/avalanche/edb6df7929b65d63fb678ce9a22d6bafbb63baa5a2bfecb5277703cfe6cc7b46',
		coingecko: 'avalanche',
	},
}

export const availableChains = [ETH, BSC, POLY, FTM, AVAX]
export type Chain = keyof typeof chainData
