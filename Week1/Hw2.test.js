import {capitalize} from './Hw2.js'

describe("hw2", () => {
  it("should return correct answer when str = nick", () => {
    expect(capitalize('nick')).toBe('Nick')
  })
  it("should return correct answer when str = good", () => {
    expect(capitalize('Good')).toBe('Good')
  })
  
  it("should return correct answer when str = ,what", () => {
    expect(capitalize(',what')).toBe(',what')
  })
  
})
