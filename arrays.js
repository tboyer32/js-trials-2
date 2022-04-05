'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const item in items){
    console.log(`${items[item]} ${item}`);
  }
}

const fruits = ['apple', 'berry', 'cherry'];

//apple 0
//berry 1
//cherry 2

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (i = 0; i<items.length; i += 2) {
    result.push(items[i]);
  }

  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  console.log(items.slice(0, n));
}
