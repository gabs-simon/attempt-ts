import { Success } from './success'

// Defines any type of success.
type OK<T> = T

// Extracts the value from a Success
export const OK = <T = any>(s: Success<T>): T => s.value
