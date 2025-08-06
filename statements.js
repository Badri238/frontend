//if else
//ladder,nested
let mark = 88;
if (mark >= 90) {
    console.log("A+");
} else if (mark >= 80) {
    console.log("A");
} else if (mark >= 70) {
    console.log("B");
}

//nested if
if(mark >= 70) {
    if (mark >= 80) {
        console.log("A");
    } else {
        console.log("B");
    }
}

//iterative
//for, while, do-while
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < 5;) {
    console.log("Iteration: " + arr[i]);
    i++;
}
let i = 0;
while (i < arr.length) {
    console.log("While Array element: " + arr[i]);
    i++;
}
i = 0;
do {
    console.log("Do While Array element: " + arr[i]);
    i++;
} while (i < arr.length);

let object = {a: 1, b: 2, c: 3};
for (let a1 of arr) {
    if (a1 == 3) {
        continue; // break statement
    }
    console.log("For of Array element: " + a1);
}
for (let key in arr) {
    console.log("For in Object key: " + key + ", value: " + arr[key]);
}

for (let i = 0; i < 5;i++){
    if(i==1)
        continue;
    console.log("hi");
}
// switch
let day = 3;
switch (day) {
    case [1,2,3]:
        console.log("Monday");
    case 3:
        console.log("Wednesday 123");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}   

//Duplicates,unique,second largest,patterns,sorting
//palindrome, anagram, 
//prime, fibonacci, factorial
//reverse, frequency