
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента
//  (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categoriesList = document.querySelector('#categories'); 
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', categoriesItems.length);  

categoriesItems.forEach(elem => {
    const categoryTitle = elem.querySelector('h2').textContent; 
    const categoryElements = elem.querySelectorAll('ul > li').length; 
  
    console.log('Category:', categoryTitle); 
    console.log('Elements:', categoryElements); 
  });