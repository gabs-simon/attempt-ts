import { AttemptType } from './enums'
import { Failure } from './failure'

describe('Failure', () => {
  describe('Should return correct value for truthy basic types', () => {
    it('Number', () => {
      const num = Failure(1)
      expect(num.error).toBe(1)
    })

    it('String', () => {
      const str = Failure('str')
      expect(str.error).toBe('str')
    })

    it('Array', () => {
      const arr = Failure([1, 2, 3])
      expect(arr.error).toEqual([1, 2, 3])
    })

    it('Object', () => {
      const obj = Failure({ a: 1, b: 'str', c: [1, 2], d: {} })
      expect(obj.error.a).toBe(1)
      expect(obj.error.b).toBe('str')
      expect(obj.error.c).toEqual([1,2])
      expect(obj.error.d).toEqual({})
    })
  })
  it('Should return correct attempt type', () => {
    expect(Failure('').type).toBe(AttemptType.FAILURE)
  })
})
