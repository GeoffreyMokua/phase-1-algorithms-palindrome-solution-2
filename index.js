function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning of the string to the middle of the string
  for(i = 0; i < word.length / 2; i++){
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const j = word.length - 1 - i
    const startingLetter = word[i]
    const lastLetter = word[j]
    // if the letters don't match, return false
    if(startingLetter !== lastLetter) return false
    }
    // if we reach the middle, and all the letters match, return true
    return true
    
}
//    racecar
//    0123456
  //  i     j

//    racecar
//    0123456
  //   i   j

  //    racecar
  //    0123456
    //    i j

//    racecar
  //    0123456
    //     ij
/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
  the function is trying to compare letters and if they match it returns true if not it returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
console.log("Expecting: true"),
console.log("=>", isPalindrome('abba'))
console.log(ex)
}

module.exports = isPalindrome;
