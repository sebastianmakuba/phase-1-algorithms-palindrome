function isPalindrome(word) {
  // Write your algorithm here
  const reversedStr = word.split('').reverse().join('')
  return word === reversedStr  
}

/* 
  Add your pseudocode here
  split the word into characters
  reverse the word
  join the split word
*/

/*
  Add written explanation of your solution here
  the function splits the word into individual characters.
  it then reverses to check if its a palindrome.
  it joins the split word to make a word 
  then cecks if its the same as the originall
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
