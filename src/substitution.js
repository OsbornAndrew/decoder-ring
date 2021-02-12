// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let correctAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  function substitution(input, alphabet, encode = true) {
    if(!input || !alphabet || alphabet.length !== 26){return false}
    for(let i = 0; i <alphabet.length; i++){
      for( let j = i+1; j <alphabet.length; j++){
        if (alphabet[i] == alphabet[j])
        return false;
      }}
    let splitCodeAlphabet = alphabet.split('')
    let encodeFinal = [];
    if(encode){
     for(let i = 0; i < 26; i++){
       encodeFinal[correctAlphabet[i]] = splitCodeAlphabet[i]}
     }
     else {
       for(let i = 0; i < 26; i++){
         encodeFinal[splitCodeAlphabet[i]] = [correctAlphabet[i]]
       }
     }

     let result = input.toLowerCase().split('').map(element =>{
      if(element === " ") return " " 
      return encodeFinal[element];
     })
     return result.join("");
    }
  
    return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
