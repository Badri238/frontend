//    *
//  ***
//*****

let rows = 4;
let result = '';
let spaces = rows*2-2;
let cols = 1;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= spaces; j++) {
        result += ' ';
    }
    for (let j = 1; j <= cols; j++) {
        result += '*';
    }
    result += '\n';
    cols += 2; // Increase the number of stars for the next row
    spaces -= 2; // Decrease the number of spaces for the next row
}
console.log(result);