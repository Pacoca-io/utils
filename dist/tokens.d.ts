import { Chain } from './chains';
export declare const tokens: {
    56: {
        WBNB: string;
        PACOCA: string;
        USDT: string;
        BUSD: string;
    };
    1: {};
    250: {};
    137: {};
    43114: {};
};
interface IGetTokenArgs {
    chain: Chain;
    address: string;
}
export interface IToken {
    symbol: string;
    name: string;
    address: string;
    decimals: number;
    chain: Chain;
}
export declare const getToken: ({ chain, address }: IGetTokenArgs) => Promise<IToken>;
export {};
