// find the biggest name from an array (first one)

function megaFriend(friends) {
    // to check the paramiter is an array
    if (Array.isArray(friends) == false) {
        return 'Please provide an array.'
    }
    // to get the biggest name
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['easir', 'arafat', 'suvro', 'fatema', 'ahsani', 'lion']
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

// to check existense of an element

/* indexOf */
if (friends.indexOf('Lion'.toLocaleLowerCase()) != -1) { // to remove case sensitivity use tolower/upperCasr()
    // console.log('Lion Exsist');
}
else {
    // console.log('Lion does not exist')
}

/* includes */

if (friends.includes('lion') == true) { // "==true" is optional
    console.log('Lion includes');
}

/* concat */
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined);