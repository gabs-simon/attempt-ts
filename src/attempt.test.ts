import { Success } from './success'
import { Failure } from './failure'
import { Attempt } from './attempt'

describe('Attempt', () => {
  it('Should correctly return value given Success', () => {
    const testFunction = (a: number) => ( (a > 0) ? Success<string>('yes') : Failure<number>(0))
    const result = testFunction(10)

    expect(Attempt<string,number>(result)).toBe('yes')
  })
  it('Should correctly throw an exception given failure', () => {
    const testFunction = (a: number) => (a > 0 ? Success<string>('yes') : Failure<number>(0))
    const result = testFunction(-1)
    try{
      Attempt<string,number>(result)
    } catch(err){
      expect(err).toBe(0)
    }
  })
})