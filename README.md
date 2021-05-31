# Attempt-TS

---

<div style="text-align: center;">
  <a href="https://gabs-simon.github.io/attempt-ts/">
    <img
      src="https://img.shields.io/badge/docs-here-blue"
      alt="Documentation link"
    />
  </a>
  &nbsp;
  <a href="https://github.com/gabs-simon/attempt-ts/actions/workflows/main.yml">
    <img
      src="https://github.com/gabs-simon/attempt-ts/actions/workflows/main.yml/badge.svg"
      alt="Github Actions status"
    />
  </a>
  <br />
  <a href="https://github.com/prettier/prettier">
    <img
      alt="code style: prettier"
      src="https://camo.githubusercontent.com/48a41f43affa2e6253d6a48e0ee662ec53ce13c46442ac815e81d36b6e6b434d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e737667"
      data-canonical-src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"
    />
  </a>&nbsp;
  <a href="https://github.com/facebook/jest">
    <img
      src="https://camo.githubusercontent.com/3add87b81e938ae6e952a1c8880615aa1b93b904e45fb71a3c96438d536cef27/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7465737465645f776974682d6a6573742d3939343234662e737667"
      alt="Tested with Jest"
      data-canonical-src="https://img.shields.io/badge/tested_with-jest-99424f.svg"
    />
  </a>
  &nbsp;
  <a href="#license">
    <img
      src="https://camo.githubusercontent.com/b7aa5151f4f1a3a20f32c67ea5c6a3a5d0041e57741fd7465673d7e71f8d7fda/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f736f757263657265722d696f2f68616c6c2d6f662d66616d652e7376673f636f6c6f72423d666630303030"
      data-canonical-src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"
    />
  </a>
</div>

---

## Overview

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

## Documentation

Documentation is available on <a href="https://gabs-simon.github.io/attempt-ts/">https://gabs-simon.github.io/attempt-ts</a>.

<a href="https://gabs-simon.github.io/attempt-ts/">
  <img
    src="https://img.shields.io/badge/docs-here-blue"
    alt="Documentation link"
  />
</a>
