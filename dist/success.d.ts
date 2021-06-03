import { AttemptType } from './enums';
export declare type Success<T = any> = {
    type: typeof AttemptType.SUCCESS;
    value: T;
};
export declare const Success: <T = any>(value: T) => Success<T>;
