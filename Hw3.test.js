import {isPrime} from './Hw3'

describe("Hw3", () => {
  it("should return correct answer when n = 15", () => {
    expect(isPrime(15)).toBe(false)
  })
  it("should return correct answer when n = 55", () => {
    expect(isPrime(55)).toBe(false)
  })
  it("should return correct answer when n = 73", () => {
    expect(isPrime(73)).toBe(true)
  })
  it("should return correct answer when n = 62", () => {
    expect(isPrime(62)).toBe(false)
  })
})