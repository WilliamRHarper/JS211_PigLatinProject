'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (string) => {
  // Your code here
  let resultArray = [];
  let result = "";
let stringArray = string.split(" ");
for (let i = 0; i < stringArray.length; i++){
  let word = stringArray[i];
  resultArray.push(pigLatinHelper(word));
  result += resultArray[i].toString();

}
return result;
}

const pigLatinHelper = (word) => {
    //trim whitespace
  word = word.trim();
  //make the word lowercase
  word = word.toLowerCase();
  // Your code here
//assign a letter catcher
 let firstLetter = word[0];
 let secondLetter = word[1];
 let thirdLetter = word[2];
 let fourthLetter = word[3];
 let result = ""; 
 const vowel = ["a","e","i","o","u"];
 for (let i = 0; i < vowel.length; i++) {

//  }
// if (word.indexOf(vowel[i]) === -1) {
//   result = word.substring(1) + firstLetter + "ay";
// }
  if (firstLetter === vowel[i]){
   result = word + "yay";
   break;
 }
   else if (secondLetter === vowel[i] || secondLetter === "y") {
    result = word.substring(1) + firstLetter + "ay";
  }
  else if (thirdLetter === vowel[i]) {
   result = word.substring(2) + firstLetter + secondLetter + "ay";
 }

 else if (fourthLetter === vowel[i]) {
   result = word.substring(3) + firstLetter + secondLetter + thirdLetter + "ay";
 }
// else if (word.indexOf(vowel[i]) === -1) {
//   result = word.substring(1) + firstLetter + "ay";
// }

}
return result;
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.