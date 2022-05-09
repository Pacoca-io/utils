import Web3 from 'web3'
import { chainData, Chain, ETH, BSC, POLY, AVAX, FTM } from './chains'

type IRpc = {
  [key in Chain]: Web3
}

type IMultiRpc = {
  [key in Chain]?: Web3[]
}

const rpc: IRpc = {
	[ETH]: new Web3(chainData[ETH].rpc),
	[BSC]: new Web3(chainData[BSC].rpc),
	[POLY]: new Web3(chainData[POLY].rpc),
	[AVAX]: new Web3(chainData[AVAX].rpc),
	[FTM]: new Web3(chainData[FTM].rpc),
}

export const multiRpc: IMultiRpc = {
	[BSC]: chainData[BSC].rpcs.map(rpc => new Web3(rpc)),
}

export default rpc
