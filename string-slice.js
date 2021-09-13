const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';


/* Split */

const words = anthem.split(' ');
// console.log(words);
const withoutA = anthem.split('a');
// console.log(withoutA);
const withoutB = anthem.split('a', 3);
// console.log(withoutB);


/* Slice spicific portion */

const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);
/* start form o index and cut off the last one */
const smallSlice1 = anthem.slice(0, -1);
// console.log(smallSlice1);
/* start form 6 index and cut off the last two */
const smallSlice2 = anthem.slice(5, -2);
// console.log(smallSlice2);


/* substr */

/* substr will start form 11 position and than give 6 string */
const anotherPart1 = anthem.substr(11, 6);
// console.log(anotherPart1);


/* SubString */

/* substring will start form 11 position value to before 15 value */
const anotherPart2 = anthem.substring(11, 15);
// console.log(anotherPart2);

/* "Concat" and "+" to add string*/
const first = 'Amader';
const second = 'City';

const fullString1 = first + second;
// console.log(fullString1);

const fullString2 = first.concat(second).concat('abc').concat('ZXY');
// console.log(fullString2);

/* Join */
const word = ['easir', 'arafat', 'suvro'];

const allJoined1 = word.join(''); // empty string '';
// console.log(allJoined1);

const allJoined2 = word.join(' '); // empty string with a space '';
// console.log(allJoined2);

const allJoined3 = word.join(','); // empty string with a',';
console.log(allJoined3);

const allJoined4 = word.join(', '); // empty string with a ', ';
console.log(allJoined4);
