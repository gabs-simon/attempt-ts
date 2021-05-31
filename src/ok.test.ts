import { Success } from './success'
import { OK } from './ok'

describe('OK', () => {
  it('Should correctly return value given a valid Success', () => {
    const result = Success('Hello')
    expect(OK(result)).toBe('Hello')
  })
})
