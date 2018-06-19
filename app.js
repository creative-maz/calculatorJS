// let firstNum = document.querySelector('.firstNum');
// let secondNum = document.querySelector('.secondNum');
// let add = document.querySelector('.add');
// let subtract = document.querySelector('.subtract');
// let multiply = document.querySelector('.multiply');
// let divide = document.querySelector('.divide');
// let answer = document.querySelector('.answer');

// add.addEventListener('click', function () {
// 	answer.innerHTML = parseInt(firstNum.value) + parseInt(secondNum.value);
// });

// subtract.addEventListener('click', function () {
// 	answer.innerHTML = parseInt(firstNum.value) - parseInt(secondNum.value);
// });

// multiply.addEventListener('click', function () {
// 	answer.innerHTML = parseInt(firstNum.value) * parseInt(secondNum.value);
// });

// divide.addEventListener('click', function () {
// 	answer.innerHTML = parseInt(firstNum.value) / parseInt(secondNum.value);
// });

let nav = document.querySelector('.navigation');
let ul = document.querySelector('ul');
let li = document.querySelector('li');
let link = document.querySelector('a');

li = document.createElement('li');

link = document.createElement('a');
link.innerHTML = 'Menu';
console.log(link);
li.appendChild(link);
ul.appendChild(li);