import { Failure } from './failure'

// Defines any type of failure
type Why<T> = T

// Extracts the error from a Failure
export const Why = <F = any>(s: Failure<F>): F => s.error
