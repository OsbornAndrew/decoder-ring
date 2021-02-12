const substitution = require("../src/substitution")
const expect = require("chai").expect;

describe("substitution", ()=>{
    it("should make sure there are no duplicate letters passed in as alphabet", ()=>{
      const actual = substitution("message", "abcdabcdabcdabcdabcdabcdab")
      expect(actual).to.be.false
    })
    it("should make sure the alphabet passed in is exactly 26 characters", ()=>{
        const actual = substitution("message", "abc")
        expect(actual).to.be.false
    })
    it("should preserve spaces passed in", ()=> {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)
    })
})