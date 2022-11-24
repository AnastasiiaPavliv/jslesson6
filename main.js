//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
/*let str1='hello world';
let str2='lorem ipsum';
let str3='javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);*/

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
/*let str1='hello world';
let str2='lorem ipsum';
let str3='javascript is cool';
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());*/

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*let str1='HELLO WORLD';
let str2='LOREM IPSUM';
let str3='JAVASCRIPT IS COOL';
console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase())*/

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*let str=' dirty string   ';
console.log(str.replaceAll(' ', ''));*/

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
/*let str = 'Ревуть воли як ясла повні';
console.log(str.split(','));*/

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// let str = arr.map(value => value.toString());
// console.log(str);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// nums.sort(function (a, b)
// { if (a<b){
//     return a-b;}
//
//     if (a>b){
//         return -1;
//     }
// });
// console.log(nums)

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//  let  cADA=coursesAndDurationArray;
// cADA.sort(function (a, b)
// {
//     if (a.monthDuration>b.monthDuration){
//     return -1;}
// })
// console.log(cADA)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filtercADA=cADA.filter(value => value.monthDuration>5);
// console.log(filtercADA);

// описати колоду карт
const suits=[
    { cardSuit:'heart', color:'red' },
    { cardSuit:'diamond', color:'red' },
    { cardSuit:'spade', color:'black' },
    { cardSuit:'clubs', color:'black' },
]
const cardNames=[6,7,8,9,10,'ace','jack','queen','king',];
const deck=[]

for (const suit of suits) {
    for (const cardName of cardNames) {
       const card = {
           cardSuit:suit.cardSuit,
           value: cardName,
           color: suit.color
       }
       deck.push(card);
    }
    deck.push({cardSuit:'joker', value: null, color: 'red'})
    deck.push({cardSuit:'joker', value: null, color: 'black'})
// console.log(deck);
}
// - знайти піковий туз
// let filter=deck.filter(value => value.cardSuit === 'spade' && value.value ==='ace');
// console.log(filter);

// - всі шістки
// let filter1= deck.filter(value => value.value === 6);
// console.log(filter1);

// - всі червоні карти
//  let filter2= deck.filter(value => value.color === 'red');
//  console.log(filter2);

// - всі буби
// let filter3= deck.filter(value => value.cardSuit === 'diamond');
// console.log(filter3);

// - всі трефи від 9 та більше
// let filter4=deck.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) ||
//     ( value.cardSuit === 'clubs' && typeof value.value === 'string' ));
//  console.log(filter4);

//{
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
//
let reduce=deck.reduce((accumulator, decks) => {
    if (decks.cardSuit === 'spade'){
        accumulator.spades.push(decks);
    } else if (decks.cardSuit === 'diamond'){
        accumulator.diamonds.push(decks);
    } else if (decks.cardSuit === 'heart'){
        accumulator.hearts.push(decks);
    } else if (decks.cardSuit === 'club'){
        accumulator.clubs.push(decks);
    } ;

    return accumulator;},
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);