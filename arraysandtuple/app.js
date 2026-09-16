"use strict";
// ============================================================
//                TYPESCRIPT ARRAYS & TUPLES
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// 1. BASIC ARRAY
// ============================================================
// Array containing only numbers
// Can contain ANY number of elements
var arr = [2, 3, 4];
console.log("Number array:", arr);
// Array containing only strings
var names = ["Ram", "Shyam", "Mohan"];
console.log("String array:", names);
// Array containing only booleans
var flags = [true, false, true];
console.log("Boolean array:", flags);
// ============================================================
// 2. ARRAY<T> SYNTAX
// ============================================================
// This is exactly the same as number[]
var numbers = [10, 20, 30];
var fruits = ["Apple", "Mango", "Banana"];
console.log(numbers);
console.log(fruits);
// number[]              === Array<number>
// string[]              === Array<string>
// boolean[]             === Array<boolean>
// ============================================================
// 3. TYPE INFERENCE
// ============================================================
// TypeScript automatically understands the type.
//
// arr2 is inferred as:
// (string | number | boolean)[]
var arr2 = ["adf", 234, true];
console.log("Mixed array:", arr2);
// You can also explicitly write the type:
var arr2Explicit = [
    "adf",
    234,
    true
];
// ============================================================
// 4. UNION TYPE ARRAY
// ============================================================
// Array can contain numbers OR strings
var mixed1 = [
    10,
    "hello",
    20,
    "world"
];
console.log("Number + string:", mixed1);
// Number OR boolean
var mixed2 = [
    10,
    true,
    20,
    false
];
// ============================================================
// 5. EMPTY ARRAY
// ============================================================
// Explicitly tell TypeScript what the array will contain
var emptyNumbers = [];
emptyNumbers.push(10);
emptyNumbers.push(20);
// emptyNumbers.push("hello"); // ❌ ERROR
// ============================================================
// 6. 2D ARRAY
// ============================================================
// Array of arrays of numbers
let arr3 = [
    [2],
    [34],
    [5, 10, 15]
];
console.log("2D array:", arr3);
// Inner arrays can have different lengths
let matrix = [
    [1, 2],
    [3, 4, 5],
    [6],
    [7, 8, 9, 10]
];
// ============================================================
// 7. 2D STRING ARRAY
// ============================================================
let names2D = [
    ["Ram", "Shyam"],
    ["John", "David"],
    ["Amit"]
];
console.log("2D string array:", names2D);
// ============================================================
// 8. 3D ARRAY
// ============================================================
// Array → array → array → numbers
let arr3D = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
console.log("3D array:", arr3D);
// You can continue:
//
// number[]       -> 1D
// number[][]     -> 2D
// number[][][]   -> 3D
// number[][][][] -> 4D
// ============================================================
// 9. ARRAY OF OBJECTS
// ============================================================
let users = [
    {
        name: "Rahul",
        age: 20
    },
    {
        name: "Amit",
        age: 25
    }
];
console.log("Users:", users);
let users2 = [
    {
        name: "Raj",
        age: 22
    },
    {
        name: "Vijay",
        age: 30
    }
];
// ============================================================
// 10. READONLY ARRAY
// ============================================================
// Array cannot be modified
const readonlyNumbers = [1, 2, 3];
// readonlyNumbers.push(4); // ❌ ERROR
// readonlyNumbers[0] = 100; // ❌ ERROR
// Another syntax:
const readonlyNumbers2 = [10, 20, 30];
// ============================================================
//                    TUPLES
// ============================================================
// ============================================================
// 11. BASIC TUPLE
// ============================================================
// Tuple has a FIXED structure.
//
// Position 0 -> number
// Position 1 -> number
var arr4 = [3, 4];
console.log("Number tuple:", arr4);
// These are NOT allowed:
//
// var a: [number, number] = [3];       // ❌
// var a: [number, number] = [3, 4, 5]; // ❌
// var a: [number, number] = ["3", 4];  // ❌
// ============================================================
// 12. TUPLE WITH DIFFERENT TYPES
// ============================================================
// Position 0 -> string
// Position 1 -> number
let person = [
    "Rahul",
    25
];
console.log("Person tuple:", person);
// Order matters!
// let person2: [string, number] = [25, "Rahul"]; // ❌
// ============================================================
// 13. TUPLE WITH THREE TYPES
// ============================================================
let data = [
    "Rahul",
    25,
    true
];
console.log("3-value tuple:", data);
// Position 0 -> string
// Position 1 -> number
// Position 2 -> boolean
// ============================================================
// 14. TUPLE CONTAINING AN ARRAY
// ============================================================
// Position 0 -> number
// Position 1 -> number[]
var arr5 = [
    3,
    [34, 43]
];
console.log("Tuple containing array:", arr5);
// These are valid:
var example1 = [
    100,
    []
];
var example2 = [
    50,
    [10, 20, 30]
];
// ============================================================
// 15. TUPLE CONTAINING MULTIPLE ARRAYS
// ============================================================
// Position 0 -> number[]
// Position 1 -> string[]
let tupleArrays = [
    [1, 2, 3],
    ["a", "b", "c"]
];
console.log("Tuple of arrays:", tupleArrays);
// ============================================================
// 16. TUPLE CONTAINING A 2D ARRAY
// ============================================================
// Position 0 -> string
// Position 1 -> number[][]
let tuple2D = [
    "marks",
    [
        [10, 20],
        [30, 40]
    ]
];
console.log("Tuple containing 2D array:", tuple2D);
// ============================================================
// 17. TUPLE OF TWO NUMBER ARRAYS
// ============================================================
// EXACTLY TWO elements.
//
// Position 0 -> number[]
// Position 1 -> number[]
let arr6 = [
    [4],
    [4]
];
console.log("Two number arrays:", arr6);
// This is valid too:
let arr7 = [
    [1, 2, 3],
    [4, 5]
];
// ============================================================
// 18. OPTIONAL TUPLE ELEMENT
// ============================================================
// Position 0 -> string
// Position 1 -> number, but optional
let optionalTuple = [
    "Rahul"
];
// This is also valid:
let optionalTuple2 = [
    "Rahul",
    25
];
// But this is invalid:
//
// let x: [string, number?] = [];
// ❌ First element is required
// ============================================================
// 19. TUPLE WITH REST ELEMENT
// ============================================================
// First element -> string
// Remaining elements -> numbers
let restTuple = [
    "numbers",
    10,
    20,
    30,
    40
];
console.log("Rest tuple:", restTuple);
// This is also valid:
let restTuple2 = [
    "numbers"
];
// ============================================================
// 20. TUPLE WITH FIXED + REST TYPES
// ============================================================
// Position 0 -> string
// Position 1 -> number
// Position 2 onwards -> boolean
let fixedRestTuple = [
    "hello",
    100,
    true,
    false,
    true
];
console.log("Fixed + rest tuple:", fixedRestTuple);
// ============================================================
// 21. READONLY TUPLE
// ============================================================
let readonlyTuple = [
    10,
    20
];
// readonlyTuple[0] = 50; // ❌ ERROR
// readonlyTuple.push(30); // ❌ ERROR
// ============================================================
// 22. NAMED TUPLE
// ============================================================
// Names make the tuple easier to understand
let namedTuple = [
    "Rahul",
    25
];
console.log("Named tuple:", namedTuple);
// ============================================================
// 23. FIXED-LENGTH DATA
// ============================================================
// Exactly 2 numbers
let point = [
    10,
    20
];
// Exactly 3 numbers
let rgb = [
    255,
    100,
    50
];
// ============================================================
// 24. ARRAY VS TUPLE
// ============================================================
// ARRAY
// ------------------------------------------------------------
// Any number of elements
let arrayExample = [
    10,
    20,
    30
];
// All of these are conceptually valid:
//
// []
// [10]
// [10, 20]
// [10, 20, 30]
// [10, 20, 30, 40]
// TUPLE
// ------------------------------------------------------------
// Exactly 2 numbers
let tupleExample = [
    10,
    20
];
// Only this structure is allowed:
//
// [10, 20]
//
// Not:
//
// []
// [10]
// [10, 20, 30]
// ============================================================
// 25. THE MOST IMPORTANT PATTERNS
// ============================================================
// ---------- ARRAYS ----------
// Any number of numbers
let a1 = [1, 2, 3];
// Any number of strings
let a2 = ["a", "b", "c"];
// Any number of booleans
let a3 = [true, false];
// Numbers OR strings
let a4 = [1, "hello", 2];
// 2D numbers
let a5 = [[1, 2], [3, 4]];
// 3D numbers
let a6 = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
// Array of objects
let a7 = [
    { name: "A", age: 20 },
    { name: "B", age: 30 }
];
// ---------- TUPLES ----------
// Exactly 2 numbers
let t1 = [10, 20];
// String followed by number
let t2 = ["Rahul", 25];
// String, number, boolean
let t3 = [
    "Rahul",
    25,
    true
];
// Number followed by number array
let t4 = [
    10,
    [20, 30]
];
// Two number arrays
let t5 = [
    [1, 2],
    [3, 4]
];
// String followed by 2D number array
let t6 = [
    "matrix",
    [
        [1, 2],
        [3, 4]
    ]
];
// Optional tuple element
let t7 = [
    "Rahul"
];
// Fixed element + unlimited numbers
let t8 = [
    "marks",
    10,
    20,
    30
];
// ============================================================
//                  FINAL CHEAT SHEET
// ============================================================
/*

ARRAYS
======

number[]                       -> array of numbers
string[]                       -> array of strings
boolean[]                      -> array of booleans

Array<number>                  -> array of numbers
Array<string>                  -> array of strings

(number | string)[]            -> numbers OR strings

number[][]                     -> 2D number array
number[][][]                   -> 3D number array
number[][][][]                 -> 4D number array

User[]                         -> array of User objects

readonly number[]              -> readonly number array


TUPLES
======

[number, number]
-> exactly 2 numbers

[string, number]
-> exactly string + number

[string, number, boolean]
-> exactly string + number + boolean

[number, number[]]
-> exactly number + number array

[number[], string[]]
-> exactly number array + string array

[number[][], number[][]]
-> exactly two 2D number arrays

[string, number?]
-> string + optional number

[string, ...number[]]
-> string + any number of numbers

readonly [number, number]
-> readonly tuple


MAIN DIFFERENCE
===============

number[]
    ↓
"Any number of elements, all numbers"


[number, number]
    ↓
"Exactly 2 elements, both numbers"


[number, string]
    ↓
"Exactly 2 elements:
 position 0 = number
 position 1 = string"


[number, number[]]
    ↓
"Exactly 2 elements:
 position 0 = number
 position 1 = array of numbers"


*/
//# sourceMappingURL=app.js.map