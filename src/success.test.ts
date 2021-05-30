import { AttemptType } from './enums'
import { Success } from './success'

describe('Success', () => {
  describe('Should return correct value for truthy basic types', () => {
    it('Number', () => {
      const num = Success(1)
      expect(num.value).toBe(1)
    })

    it('String', () => {
      const str = Success('str')
      expect(str.value).toBe('str')
    })

    it('Array', () => {
      const arr = Success([1, 2, 3])
      expect(arr.value).toEqual([1, 2, 3])
    })

    it('Object', () => {
      const obj = Success({ a: 1, b: 'str', c: [1, 2], d: {} })
      expect(obj.value.a).toBe(1)
      expect(obj.value.b).toBe('str')
      expect(obj.value.c).toEqual([1, 2])
      expect(obj.value.d).toEqual({})
    })
  })
  it('Should return correct attempt type', () => {
    expect(Success('').type).toBe(AttemptType.SUCCESS)
  })
})
