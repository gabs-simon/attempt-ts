import { Success } from './success'
import { Failure } from './failure'
import { AsyncAttempt } from './async-attempt'

describe('AsyncAttempt', () => {
  // Returns 'yes' if success, throws 1 if failure - just for the heck of it
  const testFunctionPromise = (a: number): AsyncAttempt<string, number> =>
    a > 0 ? Promise.resolve(Success('yes')) : Promise.resolve(Failure(1))
  // Async version, does pretty much the exact same thing but written in other way
  const testFunctionAsync = async (a: number): AsyncAttempt<string, number> => {
    const result = Success('yes')
    if (a > 0) return result
    return Failure(1)
  }

  it('Should correctly return value given Success - written as Promise', async () => {
    const n = testFunctionPromise(10)

    const result = await AsyncAttempt(n)
    expect(result).toBe('yes')
  })

  it('Should correctly return value given Success - written as Async', async () => {
    const n = testFunctionAsync(10)

    const result = await AsyncAttempt(n)
    expect(result).toBe('yes')
  })

  it('Should correctly throw error given Failure - written as Promise', async () => {
    const n = testFunctionPromise(-10)

    try {
      await AsyncAttempt(n)
    } catch (err) {
      expect(err).toEqual(1)
    }
  })

  it('Should correctly throw error given Success - written as Async', async () => {
    const n = testFunctionAsync(-10)

    try {
      await AsyncAttempt(n)
    } catch (err) {
      expect(err).toEqual(1)
    }
  })
})
