'use strict';

const pigLatin = () => {
    // Your code here
    let string = document.getElementById("word").value;
    let resultArray = [];
    let result = "";
  let stringArray = string.split(" ");
  for (let i = 0; i < stringArray.length; i++){
    let word = stringArray[i];
    resultArray.push(pigLatinHelper(word));
    result = resultArray.join(" ");
  
  }
  document.getElementById("result").innerHTML = result;
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