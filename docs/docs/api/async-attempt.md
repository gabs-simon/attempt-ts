---
id: async-attempt
sidebar_position: 2
sidebar_label: AsyncAttempt
---

# AsyncAttempt

## AsyncAttempt Type

```typescript
// AsyncAttempt<S,F>
type AsyncAttempt<S = any, F = any> = Promise<Attempt<S,F>>

// Usual format of an AsyncAttempt function
const AttemptFunction = (...params): AsyncAttempt<S, F> => {
  const s: S
  const f: F
  const result: boolean
  if (result) return Success(s)
  else return Failure(f)
}
```

Defines the return type on an AsyncAttempt function.

## AsyncAttempt Function

```typescript
// AsyncAttempt()
const AsyncAttempt = async (operation: AsyncAttempt<S,F>): Promise<S>

// A generic asyncattempt function
const AsyncAttemptFunction = async (): AsyncAttempt<S,F>

// Returns S or throws F
const result = await AsyncAttempt(AsyncAttemptFunction())
```

Unwraps the return value of an AsyncAttempt function, returning a value of type `S` or throwing a value of type `F`.
