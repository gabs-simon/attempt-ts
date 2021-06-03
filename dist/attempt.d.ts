import { Success } from './success';
import { Failure } from './failure';
export declare type Attempt<T = any, F = any> = Success<T> | Failure<F>;
export declare const Attempt: <T = any, F = any>(a: Attempt<T, F>) => T;
