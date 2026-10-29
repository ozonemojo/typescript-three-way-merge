import { merge } from './merge';

const collection1 = [1, 4, 7, 10];
const collection2 = [9, 6, 3, 0]; // Descending order
const collection3 = [2, 5, 8, 11];

console.log(merge(collection1, collection2, collection3));
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
