---
id: failure
sidebar_position: 4
sidebar_label: Failure
---

# Failure

## Failure Type

```typescript
// Failure<F>
type Failure<F> = {
  type: typeof AttemptType.FAILURE
  error: F
}
```

Defines a Failure result.

## Failure Function

```typescript
// Failure()
const Failure = (value: F): Failure<F>
```

Wraps a result in a Failure wrapper.

## Why Function

```typescript
// Why()
const Why = (failure: Failure<F>): F
```

Unwraps a Failure wrapper and returns its error.
