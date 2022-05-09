"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerToFactoryMap = exports.BABY_ROUTER = exports.CAFE_ROUTER = exports.PANCAKE_ROUTER = exports.BISWAP_ROUTER = exports.APE_ROUTER = void 0;
const factories_1 = require("./factories");
const chains_1 = require("./chains");
exports.APE_ROUTER = '0xcf0febd3f17cef5b47b0cd257acf6025c5bff3b7';
exports.BISWAP_ROUTER = '0x3a6d8ca21d1cf76f653a67577fa0d27453350dd8';
exports.PANCAKE_ROUTER = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
exports.CAFE_ROUTER = '0x933daea3a5995fb94b14a7696a5f3ffd7b1e385a';
exports.BABY_ROUTER = '0x325e343f1de602396e256b67efd1f61c3a6b38bd';
exports.routerToFactoryMap = {
    [chains_1.BSC]: {
        [exports.APE_ROUTER]: factories_1.APE_FACTORY,
        [exports.PANCAKE_ROUTER]: factories_1.PANCAKE_FACTORY,
        [exports.BISWAP_ROUTER]: factories_1.BISWAP_FACTORY,
        [exports.CAFE_ROUTER]: factories_1.CAFE_FACTORY,
        [exports.BABY_ROUTER]: factories_1.BABY_FACTORY,
    },
};
//# sourceMappingURL=routers.js.map