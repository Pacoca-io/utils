import { chainData, ETH, BSC, POLY, FTM, AVAX } from './constants/chains'

export const availableChains = [ETH, BSC, POLY, FTM, AVAX]

export type Chain = keyof typeof chainData
