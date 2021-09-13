/*  js fix the central time according to view location so date are changed in diffrent palaces, to avoide the error use "moment js" web site www.momentjs.com*/

const myFavDate = new Date('1971-12-16');
// console.log(myFavDate);

const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80);
// console.log(anotherDate);

if (myFavDate.getTime() < anotherDate.getTime()) {
    console.log('favorite is earlier')
}

