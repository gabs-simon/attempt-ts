# Attempt-TS

## What it is

Attempt-TS is a series of helpers to beautify the use case of declaring success and failure types for a failable operation.

It is inspired in the common `Maybe<T>` pattern in TypeScript.

## How to use

```typescript
import { Attempt, Failure, Success }
type MathError = { error : string };

const division = (a: number, b: number):Attempt<number,MathError> => (
  (b === 0) ? Failure({ error: "Can't divide by zero"}) : Success(a / b)
)

Attempt(division(6,2)) // 3
Attempt(division(1,0)) // throws { error: "Can't divide by zero"}

const asyncDivision = async (a: number, b: number):AsyncAttempt<number,MathError> => (
  (b === 0)
    ? Promise.reject(Failure({ error: "Can't divide by zero"}))
    : Promise.resolve(Success(a / b))
)

await AsyncAttempt(asyncDivision(6,2)) // 3
await AsyncAttempt(asyncDivision(1,0)) // throws { error: "Can't divide by zero"}

```
