import { BatchExecutor } from './BatchExecutor'
import { availableChains, Chain } from './chains'
import { BSC } from './constants/chains'

type Call<T> = (...args: any[]) => T

interface ICallArgs<T> {
  chain: Chain
  call: Call<T>
}

interface IMulticallArgs<T> {
    chain: Chain
    calls: Call<T>[]
}

type IInstances = {
  [key in Chain]?: BatchExecutor
}

const instances: IInstances = availableChains.reduce(
	(acc, chain: Chain) => ({ ...acc, [chain]: new BatchExecutor({ chain }) }),
	{},
)

export const bscCall = <T>(_call: Call<T>)=> call({ chain: BSC, call: _call })

export const call = async <T>({ chain, call }: ICallArgs<T>): Promise<T> =>
	(await instances[chain].call({ call })) as T

export const multicall = <T>({ chain, calls }: IMulticallArgs<T>): Promise<T[]> =>
	Promise.all(calls.map(c => call<T>({ chain, call: c })))
