/* if erroe occure form an external file its called try catch */

const myName = 'aim';
const student = undefined;
// console.log(student.name);

try {
    myName = 'tumi'; // code here for axpected error
}
catch (error) {
    console.log('getting error ', error)
}

// finally -- check it out

console.log(100);
console.log(myName);