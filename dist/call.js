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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bscCall = exports.call = void 0;
const BatchExecutor_1 = require("./BatchExecutor");
const chains_1 = require("./chains");
const instances = chains_1.availableChains.reduce((acc, chain) => (Object.assign(Object.assign({}, acc), { [chain]: new BatchExecutor_1.BatchExecutor({ chain }) })), {});
const call = ({ chain, call }) => __awaiter(void 0, void 0, void 0, function* () { return (yield instances[chain].call({ call })); });
exports.call = call;
const bscCall = (_call) => (0, exports.call)({ chain: chains_1.BSC, call: _call });
exports.bscCall = bscCall;
//# sourceMappingURL=call.js.map