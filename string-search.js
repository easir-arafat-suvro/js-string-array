// 28 - 2 Apply Search includes, indexOf, startswith, endswith


const products = [
    'Dell hardcode i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera dell',
    'Dell 1X59 Lenovo cemmercial yoga laptop',
    'HTC low price phone',
    'Lg supernova laptop',
    'Dell purple color phone with Laptop'
]

// # Option - 1 [indexOf]:

// searching with upperCase() lowerCase() problems
const searching1 = 'laptop';
const output1 = [];
for (const product of products) {
    if (product.indexOf(searching1) != -1) {
        output1.push(product);
    }
}
console.log(output1);

// searching with upperCase() lowerCase() fixation
const searching2 = 'laptop';
const output2 = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching2.toLowerCase()) != -1) {
        output2.push(product);
    }
}
console.log(output2);


// # Option - 2  [includes]:

// searching with upperCase() lowerCase() fixation using - INCLUDES() 
const searching3 = 'laptop';
const output3 = [];
for (const product of products) {
    if (product.toLowerCase().includes(searching3.toLowerCase())) {
        output3.push(product);
    }
}
console.log(output3);

// # Option - 3 [startsWith];

// startsWith 
const searching4 = 'Dell';
const output4 = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(searching4.toLowerCase())) {
        output4.push(product);
    }
}
console.log(output4);

// # Option - 4 [startsWith];

// endsWith 
const searching5 = 'Dell';
const output5 = [];
for (const product of products) {
    if (product.toLowerCase().endsWith(searching5.toLowerCase())) {
        output5.push(product);
    }
}
console.log(output5);