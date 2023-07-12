// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної
//  кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - 
// червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const validation = document.querySelector('#validation-input'); 

validation.addEventListener('blur', () => {
  const inputLength = validation.value.length; 
  const dataLength = Number(validation.getAttribute('data-length')); 

  validation.classList.remove('valid', 'invalid'); 

  if (inputLength === dataLength) {
    validation.classList.add('valid'); 
  } else {
    validation.classList.add('invalid'); 
  }
});