import { Contract } from 'web3-eth-contract';
import { Chain } from './chains';
interface IContractorArgs {
    abi: object[];
    address: string;
    chain: Chain;
    name: string;
}
export declare const contractor: ({ abi, address, chain, name }: IContractorArgs) => Contract;
export {};
