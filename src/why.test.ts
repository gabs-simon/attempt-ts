import { Failure } from './failure'
import { Why } from './why'

describe('Why', () => {
  it('Should correctly return value given a valid Failure', () => {
    const result = Failure('Hello')
    expect(Why(result)).toBe('Hello')
  })
})
