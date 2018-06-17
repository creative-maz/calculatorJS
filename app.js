let firstNum = document.querySelector('.firstNum');
let secondNum = document.querySelector('.secondNum');
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let answer = document.querySelector('.answer');

add.addEventListener('click', function () {
	answer.innerHTML = parseInt(firstNum.value) + parseInt(secondNum.value);
});

subtract.addEventListener('click', function () {
	answer.innerHTML = parseInt(firstNum.value) - parseInt(secondNum.value);
});

multiply.addEventListener('click', function () {
	answer.innerHTML = parseInt(firstNum.value) * parseInt(secondNum.value);
});

divide.addEventListener('click', function () {
	answer.innerHTML = parseInt(firstNum.value) / parseInt(secondNum.value);
});