// Opgave 1 - Sum of Numbers //

const sum = (sumArray) => {

    let totalValue = 0;

    for (let i = 0; i < sumArray.length; i++) {
        totalValue += sumArray[i];
    }

    return totalValue;
};


// Opgave 2 - Max number //

function max(maxArray) {

    return Math.max.apply (null, maxArray);

};

// Opgave 3 - Count vowels //

function countVowels(vowelArray) {

    return vowelArray.match(/[aeyuioæøå]/gi).length;

};

// Opgave 4 - Filter odd numbers //

function filterOdd(oddArray) {

    return oddArray.filter(number => { return number % 2 !== 0});

};

// Opgave 5 - Reverse string //

function reverseString(reverseArray) {

    return reverseArray.split('').reverse().join('');

};

// Opgave 6 - Lav flat array //

function flatten(flattenArray) {

    return [].concat(...flattenArray)

};

