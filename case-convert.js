

// toLowerCase() or, toUpperCase() are the methods inbulid in javaScript, most of the time it requires to compare two fields same etc.

// conversion
const userInput = 'blackPink';
const savedUserField = 'BlackPinK';
if (userInput.toLowerCase() == savedUserField.toLowerCase()) {
    console.log('user exists')
}
else {
    console.log('user not exists')
}
// if you don't use .toLowerCase() it will give you 'user not exists' as js is case sencitive.