import Web3 from 'web3';
import { Chain } from './chains';
declare type IRpc = {
    [key in Chain]: Web3;
};
declare type IMultiRpc = {
    [key in Chain]?: Web3[];
};
declare const rpc: IRpc;
export declare const multiRpc: IMultiRpc;
export default rpc;
