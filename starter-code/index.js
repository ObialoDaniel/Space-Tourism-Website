//Arrays Manipulation
//1. Extract
let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log(fruits.pop()); // Output: "Date"
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

//2. Add
fruits.push("Elderberry");
console.log(fruits);

//3. shift: extracts the first element of the array
fruits.shift();
console.log(fruits);

//4. unshift: adds an element to the beginning of the array
fruits.unshift("fig");
console.log(fruits);

//life scenario with a cart
let cart = [];

cart.push("T-shirt");
cart.push("Jeans");
cart.push("Sneakers");

console.log("Cart:", cart);

let removedItem = cart.pop();
console.log("Removed Item:", removedItem);
console.log("Updated Cart:", cart);

cart.unshift("Flashed sale: Sunglasses 50% off!")
console.log("Cart with Flash Sale:", cart);

let processingItem = cart.shift();
console.log("Now processing:", processingItem);
console.log("Remaining cart:", cart);

console.log("total items in cart:", cart.length);

cart.push("Hat");
cart.push("Umbrella");
cart.push("Phone");
console.log("Final Cart:", cart);
cart.pop();
cart.pop();
console.log("Final Cart after removing last two items:", cart.length);

//5. splice: removes elements from an array and optionally adds new elements in their place
// principle: array.splice(start, deleteCount, item1, item2, ...);
// start: the index at which to start changing the array;
// deleteCount: the number of elements to remove from the array;

let colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1, 1);
alert(colors); // Output: ["Red", "Blue", "Yellow"]

//6. slice: returns a shallow copy of a portion of an array into a new array object
let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers); // Output: [2, 3]

colors.slice(2, 3, "Purple", "Orange");
alert(colors);  
let arr = ["I", "study", "Javascript"];
arr.toSpliced(2, 0, "complex", "language");
alert(arr); // Output: ["I", "study", "complex", "language", "Javascript"]