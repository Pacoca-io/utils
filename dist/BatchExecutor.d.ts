import { Chain } from './chains';
export declare class BatchExecutor {
    chain: Chain;
    counter: number;
    batch: any;
    id: number;
    _debouncedExecute: () => void;
    constructor({ chain }: {
        chain: Chain;
    });
    _reset(): void;
    _execute(): Promise<void>;
    _scheduleExecution(): void;
    call({ call }: any): Promise<unknown>;
}
