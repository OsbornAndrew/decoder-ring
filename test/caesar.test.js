const caesar = require("../src/caesar")
const expect = require("chai").expect;

describe("caesar", ()=>{
    it("should return zebra magazine, to demonstrate that my code can return z", ()=>{
    const expected = "zebra magazine"
    const actual = caesar("cheud pdjdclqh", 3, false)
    console.log(actual)
    expect(actual).to.equal(expected)
});
  it("should keep spaces when passed in a string with them", () => {
  const expected = "jrrg pruqlqj"
  const actual = caesar("good morning", 3)
  expect(actual).to.equal(expected)
});
    it("should maintain spaces and other non-alphabetic symbols",() =>{
        const expected = "qfsgfdu. 100%"
        const actual = caesar("Perfect. 100%", 1)
        expect(actual).to.equal(expected)
    })
   it("should return false when passed in no shift variable", ()=> {
        const expected = false
        const actual = caesar("hello", )
        expect(actual).to.equal(expected)
    })
    it("should return false when passed in a shift greater than 25", ()=> {
        const expected = false
        const actual = caesar("hello", 70)
        expect(actual).to.equal(expected)
    })
    it("should return false when passed in a shift less than -25", ()=> {
        const actual = caesar("hello", -70)
        expect(actual).to.be.false
    })
    it("should allow for a message to be decoded", () => {
        const expected = 'thinkful'
        const actual = caesar("wklqnixo", 3, false)
        expect(actual).to.equal(expected)
    })
    it("should allow for negative numbers to encode a message",() => {
        const expected = "qefkhcri"
        const actual = caesar("thinkful", -3);
        expect(actual).to.equal(expected)
    })
    it("should shift the entire alphabet back 1 character", () => {
        const expected = "zabcdefghijklmnopqrstuvwxy"
        const actual = caesar("abcdefghijklmnopqrstuvwxyz", -1)
        expect(actual).to.equal(expected)
    })
})