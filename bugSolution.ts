function combineGeneric<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const numResult = combineGeneric([1, 2, 3], [4, 5, 6]);
console.log(numResult); // Output: [1, 2, 3, 4, 5, 6]

const strResult = combineGeneric(['a', 'b'], ['c', 'd']);
console.log(strResult); // Output: ['a', 'b', 'c', 'd']

// Example of type error
// const errorResult = combineGeneric([1,2,3], ['a', 'b']); // This will result in a type error