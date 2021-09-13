/* argument is an array like object but not an object;
    using argument you can pass more than one parameter values with in one parameter.
    Argument can be accessed index wise, run a for loop; but not use push, pop etc. 
*/

function addNumbers(num1) {
    // console.log(arguments[1]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const sum = addNumbers(100, 200, 500, 350, 120, 80);
// console.log(sum);


/* added strings */
function getFullName(firstName, lastName) {

    let fullName = '';
    for (const name of arguments) {
        fullName += name + ' '; // too much string addition lower the performance
    }
    return fullName;
}

const nameAdded = getFullName('omuk', 'shonket', 'bin', 'hanif', 'shonket');
console.log(nameAdded);