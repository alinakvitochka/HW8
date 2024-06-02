function capitalizeStrings(words) {
    const strings = []
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        let newString = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        strings.push(newString)
    }
    return strings;
}




const words = ["apple", "banaNA", "kiWi", "ORANGE"];



console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]




function findCommonElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);

console.log(commonElements);


function analyzeArray(numbers) {
    if (numbers.length == 0) {
        return {
            sum: 0,
            average: 0,
            min: undefined,
            max: undefined
        };


    }

    let sum = 0
    let avg = 0
    let min = numbers[0]
    let max = min
    numbers.forEach(element => {
        sum = sum + element
        if (element < min) {
            min = element
        }
        if (element > max) {
            max = element

        }


    });


    avg = sum / numbers.length;
    return {
        sum: sum,
        average: avg,
        min: min,
        max: max
    }
}

const numbers = [1, 2, 3, 4, 5,];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }

