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
exports.getPairReserves = exports.getPairAddress = void 0;
const call_1 = require("./call");
const contractor_1 = require("./contractor");
const utils_1 = require("./utils");
const tokens_1 = require("./tokens");
const router_json_1 = __importDefault(require("./abis/router.json"));
const pair_json_1 = __importDefault(require("./abis/pair.json"));
const factory_json_1 = __importDefault(require("./abis/factory.json"));
const getPairAddress = ({ chain, token0Address, token1Address, routerAddress, factoryAddress, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!factoryAddress && !routerAddress)
        throw Error('getPairAddress::Either router ou factory address must be provided');
    if (!factoryAddress) {
        const router = (0, contractor_1.contractor)({
            chain,
            abi: router_json_1.default,
            name: 'router',
            address: routerAddress,
        });
        factoryAddress = yield (0, call_1.call)({
            chain,
            call: router.methods.factory()
        });
    }
    const factory = yield (0, contractor_1.contractor)({
        chain,
        abi: factory_json_1.default,
        name: 'factory',
        address: factoryAddress,
    });
    return (0, call_1.call)({
        chain,
        call: factory.methods.getPair(token0Address, token1Address)
    });
});
exports.getPairAddress = getPairAddress;
const getPairReserves = ({ chain, address }) => __awaiter(void 0, void 0, void 0, function* () {
    const contract = (0, contractor_1.contractor)({
        name: 'pair',
        abi: pair_json_1.default,
        address,
        chain,
    });
    const [rawToken0, rawToken1, reserves, rawTotalSupply] = yield Promise.all([
        (0, call_1.call)({ chain, call: contract.methods.token0() }),
        (0, call_1.call)({ chain, call: contract.methods.token1() }),
        (0, call_1.call)({ chain, call: contract.methods.getReserves() }),
        (0, call_1.call)({ chain, call: contract.methods.totalSupply() }),
    ]);
    const tokenAddress0 = rawToken0.toLowerCase();
    const tokenAddress1 = rawToken1.toLowerCase();
    const [token0, token1] = yield Promise.all([
        (0, tokens_1.getToken)({ chain, address: tokenAddress0 }),
        (0, tokens_1.getToken)({ chain, address: tokenAddress1 }),
    ]);
    if (!token0 || !token1)
        return null;
    return {
        [tokenAddress0]: (0, utils_1.toDecimal)(reserves._reserve0, token0.decimals),
        [tokenAddress1]: (0, utils_1.toDecimal)(reserves._reserve1, token1.decimals),
        lpTotalSupply: (0, utils_1.toDecimal)(rawTotalSupply, 18),
    };
});
exports.getPairReserves = getPairReserves;
//# sourceMappingURL=pairs.js.map