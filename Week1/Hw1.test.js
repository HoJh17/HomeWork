import {stars} from './Hw1.js'

describe("hw1", () => {
  it("should return correct answer when n = 1", () => {
    expect(stars(1)).toEqual(["*"])
  })
  it("should return correct answer when n = 4", () => {
      expect(stars(4)).toEqual(['*',"**","***","****"])
  })
  
})
