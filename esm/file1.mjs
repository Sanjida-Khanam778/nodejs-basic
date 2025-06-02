import { a, add } from "./file2.mjs";
import { a as A, add as ADD } from "./file3.mjs";
console.log(a);
const b = add(2, 3);
console.log(b);

console.log(A);
console.log(ADD(4, 5, 6));