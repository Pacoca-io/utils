import { BigNumber } from 'bignumber.js';
import { Chain } from './chains';
interface IGetPairAddressArgs {
    chain: Chain;
    token0Address: string;
    token1Address: string;
    routerAddress?: string;
    factoryAddress?: string;
}
interface IPairReserves {
    [key: string]: BigNumber;
    lpTotalSupply: BigNumber;
}
interface IGetPairReservesArgs {
    chain: Chain;
    address: string;
}
export declare const getPairAddress: ({ chain, token0Address, token1Address, routerAddress, factoryAddress, }: IGetPairAddressArgs) => Promise<string>;
export declare const getPairReserves: ({ chain, address }: IGetPairReservesArgs) => Promise<IPairReserves | null>;
export {};
