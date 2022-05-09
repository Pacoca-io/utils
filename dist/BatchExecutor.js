"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.BatchExecutor = void 0;
const throttle_debounce_1 = require("throttle-debounce");
const web3_1 = __importStar(require("./web3"));
const MAX_SIZE = 500;
const TIMEOUT = 100;
class BatchExecutor {
    constructor({ chain }) {
        this.id = 0;
        this.chain = chain;
        this._debouncedExecute = (0, throttle_debounce_1.debounce)(TIMEOUT, () => this._execute());
        this._reset();
    }
    _reset() {
        const chainRpcs = web3_1.multiRpc[this.chain];
        const provider = chainRpcs
            ? chainRpcs[this.id % chainRpcs.length]
            : web3_1.default[this.chain];
        this.batch = new provider.eth.BatchRequest();
        this.id = this.id + 1;
        this.counter = 0;
    }
    _execute() {
        return __awaiter(this, void 0, void 0, function* () {
            this.batch.execute();
            this._reset();
        });
    }
    _scheduleExecution() {
        this.counter >= MAX_SIZE
            ? this._execute()
            : this._debouncedExecute();
    }
    call({ call }) {
        return __awaiter(this, void 0, void 0, function* () {
            let resolvePromise;
            let rejectPromise;
            const promise = new Promise((resolve, reject) => {
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            this.counter++;
            this.batch.add(call.call.request((err, res) => err
                ? rejectPromise({
                    chain: this.chain,
                    address: call._parent._address,
                    name: call._method.name,
                    err,
                })
                : resolvePromise(res)));
            this._scheduleExecution();
            return yield promise;
        });
    }
}
exports.BatchExecutor = BatchExecutor;
//# sourceMappingURL=BatchExecutor.js.map