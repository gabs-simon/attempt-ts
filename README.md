# Attempt-TS

---

<div style="text-align: center;">

  <a href="https://github.com/gabs-simon/attempt-ts/actions/workflows/main.yml">
    <img
      src="https://github.com/gabs-simon/attempt-ts/actions/workflows/main.yml/badge.svg"
      alt="Build Status"
    />
  </a>

  <br />

  <a href="https://www.npmjs.com/package/attempt-ts">
    <img
      src="https://img.shields.io/npm/v/attempt-ts"
      alt="Current NPM Version and Link"
    />
  </a> &nbsp;

  <a href="https://gabs.mit-license.org/">
    <img
      src="https://img.shields.io/npm/l/attempt-ts"
      alt="License"
    />
  </a>&nbsp;

  <a href="https://gabs-simon.github.io/attempt-ts/">
    <img
      src="https://img.shields.io/badge/docs-here-blue"
      alt="Documentation Link"
    />
  </a>&nbsp;

  <a href="https://www.typescriptlang.org/">
    <img
      src="https://img.shields.io/npm/types/attempt-ts"
      alt="TypeScript Link"
    />
  </a>
  
  <br />

  <a href="https://github.com/prettier/prettier">
    <img
      alt="code style: prettier"
      src="https://camo.githubusercontent.com/48a41f43affa2e6253d6a48e0ee662ec53ce13c46442ac815e81d36b6e6b434d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e737667"
      data-canonical-src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"
    />
  </a> &nbsp;

  <a href="https://github.com/semantic-release/semantic-release">
    <img
      src="https://camo.githubusercontent.com/df1fd6655472a008d21057736be3b95a2bced4e9ea6db7c393e7c960a4d9e450/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2532302532302546302539462539332541362546302539462539412538302d73656d616e7469632d2d72656c656173652d6531303037392e737667"
      alt="Semantic Release Link"
    />
  </a> &nbsp;

  <a href="https://github.com/facebook/jest">
    <img
      src="https://camo.githubusercontent.com/3add87b81e938ae6e952a1c8880615aa1b93b904e45fb71a3c96438d536cef27/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7465737465645f776974682d6a6573742d3939343234662e737667"
      alt="Tested with Jest"
      data-canonical-src="https://img.shields.io/badge/tested_with-jest-99424f.svg"
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

// Attempts must return either Success() or Failure() and must not throw errors
const division = (a: number, b: number): Attempt<number,string> => {
  if (b === 0)
    return Failure("Can't divide by zero")
  return Success(a / b)
}

// Calling Attempt() on the result of an Attempt either returns the result or throws the error
Attempt(division(6,2)) // 3
Attempt(division(1,0)) // throws "Can't divide by zero"

// AsyncAttempt behave the same way but they're async
const asyncDivision = async (a: number, b: number): AsyncAttempt<number,string> => {
  if (b === 0)
    return Failure("Can't divide by zero")
  return Success(a / b)
}

// AsyncAttempt() also works the same way
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
