//Duplicates
let numbers = [1, 2, 3, 4, 5, 1, 2,7,6];
let largest = 0;
let secondLargest = 0;

for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
    }

}
console.log("Largest: " + largest);
console.log("Second Largest: " + secondLargest);