export declare const ETH = 1;
export declare const BSC = 56;
export declare const POLY = 137;
export declare const FTM = 250;
export declare const AVAX = 43114;
export declare const chainData: {
    1: {
        rpc: string;
        coingecko: string;
    };
    56: {
        rpc: string;
        rpcs: string[];
        coingecko: string;
        moralis: {
            key: string;
            prefix: string;
        };
    };
    137: {
        rpc: string;
        coingecko: string;
        moralis: {
            key: string;
            prefix: string;
        };
    };
    250: {
        rpc: string;
        coingecko: string;
        moralis: {
            key: string;
            prefix: string;
        };
    };
    43114: {
        rpc: string;
        coingecko: string;
    };
};
export declare const availableChains: number[];
export declare type Chain = keyof typeof chainData;
