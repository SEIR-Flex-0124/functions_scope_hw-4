// 1.1. What is the difference between a parameter and an argument?
'They are both values that pass through functions, typically in (). Parameters are essentially placeholders in the function while arguments are values that fill parameters.' 
// 1.2. Within a function, what is the difference between return and console.log?
'console.log is a function that prints an outcome while return prints out the result of a function. The main difference seems to be that return ENDS a function.'
// 1. 3. What are the implications of the ability of a function to return a value?
'to keep things in accordance with DRY. Keeps functions nice and reusable. Another implication would be to debug. Eric often uses console.log() to check parts of his code. '
// 2. calculateCube
function calculateCube(num) {
    let volume = num * num * num;
    console.log('This is hopefully the volume: ' + volume);
};
console.log(calculateCube(5));
// 3. isAVowel
function isAVowel(letter) {
    letter = letter.toLowerCase();      //turns input into lowercase otherwise things get weird with caps
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') //these are my lil vowels
    return true;
    else return false; 

};
console.log(isAVowel('A'));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length]; // [] = return an array 
}                                        // .length returns length of parameters/arguments

console.log(getTwoLengths("Hank", "Hippopopalous"));
// 5. sumArray

function sumArray(arr) {
    let sum = 0;                                //initializes sum at 0
    for (let i = 0; i < arr.length; i++) {      //for loop to iterate for length of arr
        sum += arr[i];                         //sum = sum + arr[i]
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};