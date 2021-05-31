# Attempt-TS

## What

Attempt-TS is a series of helpers to beautify the use case of declaring success and failure types for a failable function.

It is inspired in the common `Maybe<T>` pattern in TypeScript.

## How

### Quick Guide

### API

#### **Type Attempt**

```typescript
// Attempt<S,F>
type Attempt<S = any, F = any> = Success<S> | Failure<F>

// Usual format of an Attempt function
const AttemptFunction = (...params): Attempt<S, F> => {
  const s: S
  const f: F
  const result: boolean
  if (result) return Success(s)
  else return Failure(f) // Attempt returns failures
}
```

Defines the return type on an Attempt function.

#### **Type AsyncAttempt**

```typescript
// AsyncAttempt<S,F>
type AsyncAttempt<S = any, F = any> = Success<S> | Failure<F>

// Usual format of an AsyncAttempt function
const AttemptFunction = (...params): AsyncAttempt<S, F> => {
  const s: S
  const f: F
  const result: boolean
  if (result) return Success(s)
  else throw Failure(f) // AsyncAttempt throws failures
}
```

Defines the return type on an AsyncAttempt function.

#### **Function Attempt**

```typescript
// Attempt()
const Attempt = (operation: Attempt<S,F>): S

// A generic attempt function
const AttemptFunction = (): Attempt<S,F>

// Returns S or throws F
Attempt(AttemptFunction())
```

Unwraps the return value of an Attempt function, returning a value of type `S` or throwing a value of type `F`.
