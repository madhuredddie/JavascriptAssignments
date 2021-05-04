function checkPalindrome(word) {
    word = word.toLowerCase().trim();
    word =word.replace(/\s+/g,"");
    let wordArray = word.split("");
    let word2 = "";
  
    for (let i = wordArray.length- 1; i >= 0; i--) {
    word2=word2+wordArray[i];
    }
   
    if (word == word2) {
      return word + " is a palindrome";
    } else {
      return word+ " is not a palindrome";
    }
  }

  console.log(checkPalindrome("madhu"))
  console.log(checkPalindrome("aabaa"))
  console.log(checkPalindrome("a b a c a b a"))
  console.log(checkPalindrome("pavan"))
  