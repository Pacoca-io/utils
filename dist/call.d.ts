import { Chain } from './chains';
interface ICallArgs {
    chain: Chain;
    call: () => any;
}
export declare const call: <T>({ chain, call }: ICallArgs) => Promise<T>;
export declare const bscCall: (_call: () => any) => Promise<unknown>;
export {};
