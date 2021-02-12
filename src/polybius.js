// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusEncode = require('./polybiusencode');
const polybiusDecode = require('./polybiusdecode');
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if(encode){
      let lowerCase = input.toLowerCase()
      let encodeFirst = [...lowerCase].map((i)=> {
        if(i.charCodeAt() <97 || i.charCodeAt() > 122) return i;
        return polybiusEncode[i];
      });
      return encodeFirst.join("");
}
else {
  if(Math.abs(input.split(" ").join("").length % 2)== 1)return false;
  const finalAnswer = []
for(i= 0; i<input.length; i = i+2){
  let firstNum = input[i]
  let secondNum = input[i+1]
  if (firstNum === " "){i--;
  finalAnswer.push(" ");}
  else {
    let key = `${firstNum}${secondNum}`;
    let converter = polybiusDecode[key]
    finalAnswer.push(converter)
  }
}
return finalAnswer.join("")}
 }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
