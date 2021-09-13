/* Declear an array */
const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];

/* Slice - cut out a portion of array and return that portion of array*/
const numberSliced = numbers.slice(4, 8); // slice dosn't affect the original array only cut a portion to use
console.log(numberSliced);
console.log(numbers);



/*  Splice - remove elements from an array */
const numberSpliced = numbers.splice(4, 3);
console.log(numberSpliced);
console.log(numbers);

/*  Splice & insert new elements in the array from where elements spliced*/
const numberSplicedAndInserted = numbers.splice(4, 3, 50, 60, 100, 250); // comment out the numberSpliced
console.log(numberSplicedAndInserted);
console.log(numbers);

/*  Splice none & insert new element in the array */
const numberSplicedNoneAndInserted = numbers.splice(4, 0, 777); // comment out the numberSpliced 
console.log(numberSplicedNoneAndInserted);
console.log(numbers);