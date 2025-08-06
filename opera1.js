//++ --

let a = 5;
a++;
console.log(a);

//binary
//arithmetic logical relational bitwise assignment

//ternary


//arithmetic
//+ - * / %
console.log("7." + undefined);
console.log(2 / 0);
console.log(0.1 + 0.5);
console.log("8" + null);

// "1,2"*"3,2"
console.log([12] * [3]);
console.log({ name: "js" } * { "name": "js" });

//> < >= <= == !=

console.log("d" > "a");
console.log([2, 3] < [7]);
//[2,3]>[1,4]
console.log(3.1 + 1.0);
console.log("2a" != 12);
console.log(false == 0);

console.log(2 + 1 / 3 - 8 * 4);
//logical and/or
console.log(3 > 2 || 4 < 1 || 2>1 && 2<1 && 1>3);
//AND -> first falsy value and last truthy value
//or -> vice versa
console.log(0 || undefined || null);


//bitwise
//& | ^
console.log(4 | 4);
console.log(!false);

//Ternary =
let m = 2 > 1 ? "jifjif" : "failed";

//statements
//conditional iterative switch jump

