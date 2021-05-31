---
id: success
sidebar_position: 3
sidebar_label: Success
---

# Success

## Success Type

```typescript
// Success<S>
type Success<S> = {
  type: typeof AttemptType.SUCCESS
  value: T
}
```

Defines a Success result.

## Success Function

```typescript
// Success()
const Success = (value: S): Success<S>
```

Wraps a result in a Success wrapper.

## OK Function

```typescript
// OK()
const OK = (success: Success<S>): S
```

Unwraps a Success wrapper and returns its result.
