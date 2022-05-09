"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDecimal = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const toDecimal = (num, decimals) => (new bignumber_js_1.default(num)).div(Math.pow(10, decimals));
exports.toDecimal = toDecimal;
//# sourceMappingURL=utils.js.map