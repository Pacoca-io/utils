"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableChains = exports.chainData = exports.AVAX = exports.FTM = exports.POLY = exports.BSC = exports.ETH = void 0;
exports.ETH = 1;
exports.BSC = 56;
exports.POLY = 137;
exports.FTM = 250;
exports.AVAX = 43114;
exports.chainData = {
    [exports.ETH]: {
        rpc: 'https://rpc.ankr.com/eth/edb6df7929b65d63fb678ce9a22d6bafbb63baa5a2bfecb5277703cfe6cc7b46',
        coingecko: 'ethereum',
    },
    [exports.BSC]: {
        rpc: 'https://bsc-dataseed1.binance.org/',
        rpcs: [
            'https://bsc-dataseed1.binance.org/',
            'https://bsc-dataseed2.binance.org/',
            'https://bsc-dataseed3.binance.org/',
            'https://bsc-dataseed4.binance.org/',
        ],
        coingecko: 'binance-smart-chain',
        moralis: {
            key: 'bsc',
            prefix: 'Bsc',
        },
    },
    [exports.POLY]: {
        rpc: 'https://polygon-rpc.com',
        coingecko: 'polygon-pos',
        moralis: {
            key: 'polygon',
            prefix: 'Polygon',
        },
    },
    [exports.FTM]: {
        rpc: 'https://rpc.ftm.tools',
        coingecko: 'fantom',
        moralis: {
            key: 'fantom',
            prefix: 'Ftm',
        },
    },
    [exports.AVAX]: {
        rpc: 'https://rpc.ankr.com/avalanche/edb6df7929b65d63fb678ce9a22d6bafbb63baa5a2bfecb5277703cfe6cc7b46',
        coingecko: 'avalanche',
    },
};
exports.availableChains = [exports.ETH, exports.BSC, exports.POLY, exports.FTM, exports.AVAX];
//# sourceMappingURL=chains.js.map