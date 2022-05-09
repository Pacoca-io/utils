import { Chain } from './chains';
export declare const APE_ROUTER = "0xcf0febd3f17cef5b47b0cd257acf6025c5bff3b7";
export declare const BISWAP_ROUTER = "0x3a6d8ca21d1cf76f653a67577fa0d27453350dd8";
export declare const PANCAKE_ROUTER = "0x10ed43c718714eb63d5aa57b78b54704e256024e";
export declare const CAFE_ROUTER = "0x933daea3a5995fb94b14a7696a5f3ffd7b1e385a";
export declare const BABY_ROUTER = "0x325e343f1de602396e256b67efd1f61c3a6b38bd";
declare type RouterToFactory = {
    [key in Chain]?: {
        [key: string]: string;
    };
};
export declare const routerToFactoryMap: RouterToFactory;
export {};
