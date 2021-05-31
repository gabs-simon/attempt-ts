---
id: attempt
sidebar_position: 1
sidebar_label: Attempt
---

# Attempt

## Attempt Type

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

## Attempt Function

```typescript
// Attempt()
const Attempt = (operation: Attempt<S,F>): S

// A generic attempt function
const AttemptFunction = (): Attempt<S,F>

// Returns S or throws F
Attempt(AttemptFunction())
```

Unwraps the return value of an Attempt function, returning a value of type `S` or throwing a value of type `F`.
