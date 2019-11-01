function isPalindrome(string) {
  return string === string.split("").reverse().join("")
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
