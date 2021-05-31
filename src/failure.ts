import { AttemptType } from './enums'

// Defines a failed operation
export type Failure<F = any> = {
  type: typeof AttemptType.FAILURE
  error: F
}

// Returns a Failure for a given value
export const Failure = <F = any>(error: F): Failure<F> => ({
  type: AttemptType.FAILURE,
  error,
})
