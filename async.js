/* 8. Remove the spaces found in a string
Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then return it with all spaces removed. Think about if you were tasked with cleaning up customer data at your job. You could scale this function to clean up specific fields of data, such as zip codes. */
//The /\s+/g : a regular expression that matches one or more whitespace characters such as (spaces, tabs, line breaks, etc.) The g at the end of the regular expression stands for "global", which means that it will match all occurrences of the pattern in the input string, not just the first one.

/*The replace() method is called on the input string s with the regular expression /\s+/g as the first argument and an empty string '' as the second argument. This method replaces all matches of the regular expression with the empty string, removing all whitespace characters from the string.

To summarize, the removeSpaces() function removes all spaces from the input string by replacing all occurrences of whitespace characters with an empty string.*/
function removeSpaces(s) {
    return s.replace(/\s+/g, '');
  }
  /*declares a string variable s and assigns it the value ' remove all spaces from this string '. The string contains leading and trailing spaces, as well as spaces between the words.

The removeSpaces() function is then called with the string s as an argument, which returns a new string with all spaces removed.

Finally, the clean_s variable is assigned the value returned by removeSpaces(s), and the resulting string is logged to the console using console.log() */
  let s = '   remove all spaces from this string  ';
let clean_s = removeSpaces(s);
console.log(clean_s);  // "removeallspacesfromthisstring"
/*"removeallspacesfromthisstring", which is the original string with all spaces removed 
*/


/* 9. Return a Boolean if a number is divisible by 10
Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer. */
function isDivisibleBy10(num) {
    return num % 10 === 0;
  }

  console.log(isDivisibleBy10(20)); // true
console.log(isDivisibleBy10(17)); // false
console.log(isDivisibleBy10(100)); // true

/*isDivisibleBy10() function, the % operator is used to calculate the remainder of dividing the input number num by 10. so if the remainder is 0, then the number is divisible by 10 and the function returns true. Otherwise, it returns false.


/* 10. Return the number of vowels in a string
Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters. */

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }

  console.log(countVowels('hello')); // 2
console.log(countVowels('world')); // 1
console.log(countVowels('a quick brown fox jumps over the lazy dog')); // 12

/* countVowels() function, a string vowels is declared that contains all the vowels in lowercase and uppercase. A counter variable count is initialized to 0.

A for loop is then used to go over each character in the input string str. each character, the includes() method is used to check if it is a vowel. If it is, then the count variable is incremented.

the function returns the count variable, which contains the total number of vowels in the input string.
*/