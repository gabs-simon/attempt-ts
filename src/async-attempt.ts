import { Success } from "./success";
import { Failure } from "./failure";
import { Attempt } from './attempt'

// Defines an AsyncAttempt, a promise of an attempt
export type AsyncAttempt<T = any, F = any> = Promise<Attempt<T, F>>;

// Calls a promise and returns its result as an Attempt
export const AsyncAttempt = async <T = any, F = any>(
  a: AsyncAttempt<T>
): Promise<T> =>
  a
    .then((s: Success<T>) => s.value)
    .catch((e: Failure<F>) => {throw {error: e.error}});
