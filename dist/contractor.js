"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractor = void 0;
const web3_1 = __importDefault(require("./web3"));
const contracts = {};
const contractor = ({ abi, address, chain, name }) => {
    const key = `${name}:${address}`;
    if (contracts[chain] && contracts[chain][key])
        return contracts[chain][key];
    if (!contracts[chain])
        contracts[chain] = {};
    contracts[chain][key] = new web3_1.default[chain].eth.Contract(abi, address);
    return contracts[chain][key];
};
exports.contractor = contractor;
//# sourceMappingURL=contractor.js.map