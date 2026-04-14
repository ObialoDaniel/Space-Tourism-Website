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

//7. concat: is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
// this keeps the data immutable and does not change the original arrays, prevents bugs from accidental changes to the original data, and its good for pagination, merging data  and combining APIs
//8. forEach: executes a provided function once for each array element. It basically loops through an array and does something for it.
let arr1 = [1, 2, 3];
arr1.forEach(function(element) {
  console.log(element);
});

let fruit = ['apple', 'banana', 'cherry'];
fruit.forEach(function(fruit) {
  console.log(fruit);
});

cart.forEach(item => {
    total += item.price;
})
// this would loop through each item in the cart and add its price to the total, making it easy to calculate the total cost of the items in the cart without needing to manually loop through the array and keep track of the total.
//9. map: creates a new array populated with the results of calling a provided function on every element in the calling array.
let arr2 = [1, 2, 3];
let squaredArr = arr2.map(function(element) {
  return element * element;
});
console.log(squaredArr); // Output: [1, 4, 9]
//Searching in Array:
// - IndexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present.
let arr3 = ['apple', 'banana', 'cherry'];
console.log(arr3.indexOf('banana')); // Output: 1
// - includes: determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let arr4 = ['apple', 'banana', 'cherry'];
console.log(arr4.includes('banana')); // Output: true   
// - find: returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
let arr5 = [1, 2, 3, 4, 5];
let foundElement = arr5.find(function(element) {
  return element > 3;
});
console.log(foundElement); // Output: 4 
// - findIndex: returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
let arr6 = [1, 2, 3, 4, 5];
let foundIndex = arr6.findIndex(function(element) {
  return element > 3;
});
console.log(foundIndex); // Output: 3
// - filter: creates a new array with all elements that pass the test implemented by the provided function.
let arr7 = [1, 2, 3, 4, 5];
let filteredArr = arr7.filter(function(element) {
  return element > 3;
});
console.log(filteredArr); // Output: [4, 5]
// - lastIndexOf: returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
let arr8 = ['apple', 'banana', 'cherry', 'banana'];
console.log(arr8.lastIndexOf('banana')); // Output: 3

//Task on ArrayMethod
//Given an array of product prices, use map() to apply 10% discount, filter() to show items under $50, reduce() to get total cost.
const prices = [100, 50, 30, 20, 10, 80, 45];
const discountedPrices = prices.map(price => price * 0.10);
console.log("After 10% discount:", discountedPrices);
//  Filter items under $50
const affordablePrices = discountedPrices.filter(price => price < 50);
console.log("Items under $50:", affordablePrices);
// reduce to get total cost
const totalCost = affordablePrices.reduce((total, price)=> total + price, 0);
console.log("Total cost: ", totalCost);