const polybius = require("../src/polybius")
const expect = require("chai").expect;

describe("polybius", ()=>{
    it("should keep the output as a string when encoding", ()=>{
      const actual = polybius("thinkful")
      expect(actual).to.be.a.string
    })
    it("should ignore capital letters", ()=> {
      const expected = "4432423352125413"
      const actual = polybius("ThInKfUl")
      expect(actual).to.equal(expected)
    })
});