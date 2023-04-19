/* 8. Remove the spaces found in a string
Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then return it with all spaces removed. Think about if you were tasked with cleaning up customer data at your job. You could scale this function to clean up specific fields of data, such as zip codes. */

function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}
let myString = "it's over 9000";
let noSpacesString = removeSpaces(myString);
console.log(noSpacesString);




/* 9. Return a Boolean if a number is divisible by 10
Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer. */

function isDivisibleByTen(num) {
  return num % 10 === 0;
}
console.log(isDivisibleByTen(30)); // true
console.log(isDivisibleByTen(17)); // false
console.log(isDivisibleByTen(100)); // true



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
console.log(countVowels('sup')); 
console.log(countVowels('broski')); 
console.log(countVowels('why did the chicken cross the road?')); 
