import { Attempt } from './attempt';
export declare type AsyncAttempt<T = any, F = any> = Promise<Attempt<T, F>>;
export declare const AsyncAttempt: <T = any, F = any>(a: AsyncAttempt<T, F>) => Promise<T>;
