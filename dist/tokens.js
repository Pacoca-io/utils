"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = exports.tokens = void 0;
const chains_1 = require("./chains");
const call_1 = require("./call");
const contractor_1 = require("./contractor");
const erc20_json_1 = __importDefault(require("./abis/erc20.json"));
exports.tokens = {
    [chains_1.BSC]: {
        WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        PACOCA: '0x55671114d774ee99D653D6C12460c780a67f1D18',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
        BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    [chains_1.ETH]: {},
    [chains_1.FTM]: {},
    [chains_1.POLY]: {},
    [chains_1.AVAX]: {},
};
const getToken = ({ chain, address }) => __awaiter(void 0, void 0, void 0, function* () {
    const contract = (0, contractor_1.contractor)({
        chain,
        abi: erc20_json_1.default,
        address,
        name: 'erc20',
    });
    const [symbol, name, decimals] = yield Promise.all([
        (0, call_1.call)({ chain, call: contract.methods.symbol() }),
        (0, call_1.call)({ chain, call: contract.methods.name() }),
        (0, call_1.call)({ chain, call: contract.methods.decimals() }),
    ]);
    return {
        symbol,
        name,
        address,
        decimals,
        chain,
    };
});
exports.getToken = getToken;
//# sourceMappingURL=tokens.js.map