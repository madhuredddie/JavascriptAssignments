function checkPalindrome(word) {
    word = word.toLowerCase().trim();
    word =word.replace(/\s+/g,"");
    let wordArray = word.split("");
    let word2 = "";
  
    for (let i = wordArray.length- 1; i >= 0; i--) {
    word2=word2+wordArray[i];
    }
   
    if (word == word2) {
      return true;
    } else {
      return false;
    }
  }

  function testCheckPalindrome(actual,expected)
  {
    if(actual==expected)
    {
      console.log("test passed ");
    }
    else{
      console.log("test failed");
    }
  }

  testCheckPalindrome(checkPalindrome("madhu"),false);
  testCheckPalindrome(checkPalindrome("aabaa"),true);
  testCheckPalindrome(checkPalindrome("a b a c a b a"),false);
  testCheckPalindrome(checkPalindrome("pavan"),true);
  testCheckPalindrome(checkPalindrome("abc b a"),true);
  