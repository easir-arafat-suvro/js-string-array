const numbers = [6, 4, 7, 1, 3, 9, 2, 5];

/* Sort numbers in order */
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

/* sort strings in order */
const friends = ['kavli', 'joshim', 'razzak', 'anwar', 'deepjol', 'badsha']
// console.log(friends);
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reversedFriends = friends.reverse(); // Reverse an array (sortedFriends)
// console.log(reversedFriends);

const sortReversedFriends = friends.sort().reverse();
console.log(sortReversedFriends);
// console.log(sortedFriends); // check the differnce
// console.log(friends); // check the differnce


/* Number sorting assending RECOMENDED & sort number without condition as it will return wrong output */
const bigNumbers = [66, 58, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b; // if value positive than swap the position of the elements
});
console.log(sortedBigNumbers);


// pare of comprison
var array = [66, 58, 92, 9, 6, 37, 13, 2];
array.sort((a, b) => {
    console.log(`comparing ${a},${b}`);
    return a > b ? 1
        : a === b ? 0
            : -1;
});

