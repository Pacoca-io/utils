import { BatchExecutor } from './BatchExecutor'
import { availableChains, Chain, BSC } from './chains'

interface ICallArgs {
  chain: Chain
  call: () => any
}

type IInstances = {
  [key in Chain]?: BatchExecutor
}

const instances: IInstances = availableChains.reduce(
	(acc, chain: Chain) => ({ ...acc, [chain]: new BatchExecutor({ chain }) }),
	{},
)

export const call = async <T>({ chain, call }: ICallArgs): Promise<T> =>
	(await instances[chain].call({ call })) as T

export const bscCall = (_call: () => any)=> call({ chain: BSC, call: _call })
