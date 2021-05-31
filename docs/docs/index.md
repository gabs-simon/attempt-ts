---
sidebar_position: 1
id: index
title: Overview
slug: /
---

# Overview

Attempt-TS is a series of TypeScript helpers designed to make it easy and beautiful to define and read all types a function can both return and throw.

It is inspired in the common `Maybe<T>` pattern in TypeScript.

## Quick Guide

This is a simple guide describing the most common use cases of Attempt-TS.

```typescript
import { Attempt, Failure, Success }

const division = (a: number, b: number): Attempt<number,string> => {
  if (b === 0)
    return Failure("Can't divide by zero")
  return Success(a / b)
}

Attempt(division(6,2)) // 3
Attempt(division(1,0)) // throws "Can't divide by zero"

const asyncDivision = async (a: number, b: number): AsyncAttempt<number,string> => {
  if (b === 0)
    return Failure("Can't divide by zero") // in AsyncAttempts you can either return or throw a failure
  return Success(a / b)
}


await AsyncAttempt(asyncDivision(6,2)) // 3
await AsyncAttempt(asyncDivision(1,0)) // throws "Can't divide by zero"
```
