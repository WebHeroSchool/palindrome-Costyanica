function palindrome(str) {
    let strLowerCase = str.toLowerCase();
    let newStr = strLowerCase.replace(/\s+/g, '');
    let len = newStr.length;
    let mid = Math.floor(len/2);
  
      for ( var i = 0; i < mid; i++ ) {
          if (newStr[i] !== newStr[len - 1 - i]) {
              return 'false';
          }
      }
  
      return 'true';
  }

module.exports = palindrome;
