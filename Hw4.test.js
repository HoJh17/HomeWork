import {isPalindromes} from './Hw4.js'

describe("Hw4", ()=>{
    it("should return correct answer when str = abcdcba", ()=>{
        expect(isPalindromes("abcdcba")).toBe(true)
    })
    it("should return correct answer when str = abcdsscba", ()=>{
        expect(isPalindromes("abcdsscba")).toBe(false)
    })
    it("should return correct answer when str = abcdggdcba", ()=>{
        expect(isPalindromes("abcdggdcba")).toBe(true)
    })
    it("should return correct answer when str = abcdefgbsdsdscba", ()=>{
        expect(isPalindromes("abcdefgbsdsdscba")).toBe(false)
    })
})