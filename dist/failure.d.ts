import { AttemptType } from './enums';
export declare type Failure<F = any> = {
    type: typeof AttemptType.FAILURE;
    error: F;
};
export declare const Failure: <F = any>(error: F) => Failure<F>;
