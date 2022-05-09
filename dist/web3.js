"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiRpc = void 0;
const web3_1 = __importDefault(require("web3"));
const chains_1 = require("./chains");
const rpc = {
    [chains_1.ETH]: new web3_1.default(chains_1.chainData[chains_1.ETH].rpc),
    [chains_1.BSC]: new web3_1.default(chains_1.chainData[chains_1.BSC].rpc),
    [chains_1.POLY]: new web3_1.default(chains_1.chainData[chains_1.POLY].rpc),
    [chains_1.AVAX]: new web3_1.default(chains_1.chainData[chains_1.AVAX].rpc),
    [chains_1.FTM]: new web3_1.default(chains_1.chainData[chains_1.FTM].rpc),
};
exports.multiRpc = {
    [chains_1.BSC]: chains_1.chainData[chains_1.BSC].rpcs.map(rpc => new web3_1.default(rpc)),
};
exports.default = rpc;
//# sourceMappingURL=web3.js.map