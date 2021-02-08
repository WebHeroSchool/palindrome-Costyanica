function palindrome(str) {

  var lengthString = str.length;
  var middleString = lengthString/2;

  for ( var i = 0; i < middleString; i++) {
    if ( str[i] !== str[lengthString - 1 -i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
