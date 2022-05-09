import web3 from './web3'
import { Contract } from 'web3-eth-contract'
import { AbiItem } from 'web3-utils'
import { Chain } from './chains'

interface IContractorArgs {
  abi: object[]
  address: string
  chain: Chain
  name: string
}

type Contracts = {
  [key in Chain]?: {
    [key: string]: Contract
  }
}

const contracts: Contracts = {}

export const contractor = ({ abi, address, chain, name }: IContractorArgs) => {
	const key = `${ name }:${ address }`

	if (contracts[chain] && contracts[chain][key])
		return contracts[chain][key]

	if (!contracts[chain])
		contracts[chain] = {}

	contracts[chain][key] = new web3[chain].eth.Contract(abi as AbiItem[], address)

	return contracts[chain][key]
}

