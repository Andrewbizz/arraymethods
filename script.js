'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 1 ? `deposit` : 'withdrawal';
    const htmll = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', htmll);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// //the splice method  is used to delete items from an array

// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2); //removes from position one being the second and deleted only two elements
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];

// arr2.reverse(); // this mutates the original array

// console.log(arr2);

// //concat Menthod, used to concatinate two arrays, it does not mutate original array

// const letters = arr.concat(arr2);
// console.log([...arr, ...arr2]); // also same output
// console.log(letters);

// //join method

// console.log(letters.join('-'));

// // the neww AT method specifies the exact position
// arr = [23, 11, 64];

// // traditionally we do the bracket notation

// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last element
// console.log(arr[arr.length - 1]);

// console.log(arr.slice(-1)[0]);

// console.log(arr.at(-1));

// // this also works on strings

// console.log(`jonas`.at(-1));

// specificallly gets the last character in the string

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
// if (movement > 0) {
//   console.log(`in movement ${i + 1} you deposited ${movement}`);
// } else {
//   console.log(`in movement ${i + 1} you withdrew ${Math.abs(movement)}`);
// }
// }

// console.log('------------- for each -------------');

// movements.forEach((movement, i) => {
//   if (movement > 0) {
//     console.log(`in movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(`in movement ${i + 1} you withdrew ${Math.abs(movement)}`);
//   }
// });

// //For each for map

// currencies.forEach((key, i) => {
//   console.log(`${key} ${i}`);
// });

// // For each for  sets
// const currenciesUnique = new Set(['usd', 'gbp', 'usd', 'eur', 'eur']);

// console.log(currenciesUnique);

// currenciesUnique.forEach((value, key, map) => {
//   console.log(`${value} ${key} ${map}`);
// });

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀

// const juliasData = [3, 5, 2, 12, 7];
// const katesData = [4, 1, 15, 8, 3];

// const checkDogs = function (data1, data2) {
//   data1 = [...data1].slice(1, -2);
//   data2 = [...data2];

//   const allDogs = [...data1, ...data2];

//   allDogs.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old"`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs(juliasData, katesData);

const eurToUsd = 1.1;

const moveToUsd = movements.map(mov => mov * eurToUsd);

// console.log(moveToUsd);

const movDesc = movements.map(
  (mov, i) => `Move ${i + 1} you ${mov >= 0 ? 'deposited' : 'withdrew'} ${mov}`
);

console.log(movDesc);

function uNameMaker(accr) {
  accr.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(user => {
        return user[0];
      })
      .join('');
  });
}

uNameMaker(accounts);

console.log(accounts);
