//Variables
//local global block
//primitive and non primitive
//number boolean String Symbol undefined null
//non primitive -> array Objects
let a = Symbol("fgf");
let k = 12;
console.log(a);

//array mutable
let b = [12, 1, 42, 23, 22, "ffuhf"];
console.log(b[2]);
b[16] = 46;
console.log(b.length);
//Shallow copy
let c = b;
b[1] = 18;
console.log(b[1]);
console.log(c[1]);

//[80]
//Object key value pair -> maths -> 80
const obj = { name: "js", class: "frontend", marks: [44, 55, 65] };
// Object.freeze(obj);
let obj1 = obj;
obj1["name1"] = "obj1 changes"
obj[[1,2,3]]="testing"
console.log(obj)
console.log(obj['1,2,3']);