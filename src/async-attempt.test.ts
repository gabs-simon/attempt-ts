import { Success } from './success'
import { Failure } from './failure'
import { AsyncAttempt } from './async-attempt'

describe('AsyncAttempt', () => {
  it('Should correctly return value given Success', async () => {
    const testFunction = (a: number): AsyncAttempt<string, number> =>
      a > 0
        ? Promise.resolve(Success<string>('yes'))
        : Promise.reject(Failure<number>(0))

    const n = testFunction(10)

    const result = await AsyncAttempt<string, number>(n)
    expect(result).toBe('yes')
  })

  it('Should correctly return error given Failure', async () => {
    const testFunction = (a: number): AsyncAttempt<string, number> =>
      a > 0
        ? Promise.resolve(Success<string>('yes'))
        : Promise.reject(Failure<number>(0))

    const n = testFunction(-1)

    try {
      await AsyncAttempt<string, number>(n)
    } catch (err) {
      expect(err).toEqual({ error: 0 })
    }
  })
})
