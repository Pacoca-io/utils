import { BSC, ETH, AVAX, POLY, FTM } from './chains'
import { Chain } from './chains'
import { call } from './call'
import { contractor } from './contractor'
import erc20Abi from './abis/erc20.json'
import pairAbi from './abis/pair.json'

const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'.toLowerCase()
const WBNB = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'.toLowerCase()
const WMATIC = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'.toLowerCase()
const WAVAX = '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'.toLowerCase()
const WFTM = '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'.toLowerCase()

export const tokens = {
    [ETH]: {
        WETH,
        USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7'.toLowerCase(),
        WBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'.toLowerCase(),
        USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'.toLowerCase(),
        DAI: '0x6b175474e89094c44da98b954eedeac495271d0f'.toLowerCase(),
    },
    [BSC]: {
        WBNB,
        CAKE: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'.toLowerCase(),
        USDT: '0x55d398326f99059ff775485246999027b3197955'.toLowerCase(),
        BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56'.toLowerCase(),
        BTCB: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'.toLowerCase(),
        ETH: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'.toLowerCase(),
        GNANA: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299'.toLowerCase(),
        BANANA: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95'.toLowerCase(),
        PACOCA: '0x55671114d774ee99D653D6C12460c780a67f1D18'.toLowerCase(),
        '4BELT': '0x9cb73f20164e399958261c289eb5f9846f4d1404'.toLowerCase(),
        WEX: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90'.toLowerCase(),
        EPS: '0xa7f552078dcc247c2684336020c03648500c6d9f'.toLowerCase(),
        USDM: '0xbb0fa2fbe9b37444f5d1dbd22e0e5bdd2afbbe85'.toLowerCase(),
        FLOW: '0xc943c5320b9c18c153d1e2d12cc3074bebfb31a2'.toLowerCase(),
        NUSD: '0x23b891e5c62e0955ae2bd185990103928ab817b3'.toLowerCase(),
        SYN: '0xa4080f1778e69467e905b8d6f72f6e441f9e9484'.toLowerCase(),
        USDC: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'.toLowerCase(),
    },
    [POLY]: {
        WMATIC,
        USDT: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'.toLowerCase(),
        BNB: '0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3'.toLowerCase(),
        USDC: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'.toLowerCase(),
        BUSD: '0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7'.toLowerCase(),
        WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'.toLowerCase(),
        QI: '0x580a84c73811e1839f75d86d75d88cca0c241ff4'.toLowerCase(),
    },
    [AVAX]: {
        WAVAX,
        WETH: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB'.toLowerCase(),
        USDC: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664'.toLowerCase(),
        USDT: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118'.toLowerCase(),
    },
    [FTM]: {
        WFTM,
        FETH: '0x658b0c7613e890ee50b8c4bc6a3f41ef411208ad'.toLowerCase(),
        USDC: '0x04068da6c83afcfa0e13ba15a6696662335d5b75'.toLowerCase(),
        FBTC: '0xe1146b9ac456fcbb60644c36fd3f868a9072fc6e'.toLowerCase(),
        WBTC: '0x321162Cd933E2Be498Cd2267a90534A804051b11'.toLowerCase(),
        DAI: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e'.toLowerCase(),
        NUSD: '0xED2a7edd7413021d440b09D654f3b87712abAB66'.toLowerCase(),
        NETH: '0x67c10c397dd0ba417329543c1a40eb48aaa7cd00'.toLowerCase(),
        SYN: '0xe55e19fb4f2d85af758950957714292dac1e25b2'.toLowerCase(),
        SPIRIT: '0x5Cc61A78F164885776AA610fb0FE1257df78E59B'.toLowerCase(),
        QI: '0x68aa691a8819b07988b18923f712f3f4c8d36346'.toLowerCase(),
    }
}

export const wrappedNativeTokens = {
    [ETH]: WETH,
    [BSC]: WBNB,
    [POLY]: WMATIC,
    [AVAX]: WAVAX,
    [FTM]: WFTM,
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

