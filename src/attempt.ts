import { Success } from './success'
import { Failure } from './failure'
import { OK } from './ok'
import { Why } from './why'
import { AttemptType } from './enums'

// Defines an Attempt, which can be a success or a failure
export type Attempt<T = any, F = any> = Success<T> | Failure<F>

// Checks if a given result is a success or a failure.
export const Attempt = <T = any, F = any>(
  a: Attempt<T, F>
): T => {
  if (a.type === AttemptType.SUCCESS) {
    return OK(a)
  }

  if (a.type === AttemptType.FAILURE) {
    throw Why(a)
  }
}
