import { chainData, ETH, BSC, POLY, FTM, AVAX } from './constants/chains'

export type Chain = keyof typeof chainData

export const availableChains: Chain[] = [ETH, BSC, POLY, FTM, AVAX]
