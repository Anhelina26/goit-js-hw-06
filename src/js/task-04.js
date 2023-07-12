
let counterValue = 0;

const value = document.querySelector('#value'); 
const incrementButton = document.querySelector('button[data-action="increment"]'); 
const decrementButton = document.querySelector('button[data-action="decrement"]'); 

const counter = () => {
    value.textContent = counterValue;
  };
  

incrementButton.addEventListener('click', () => {

    counterValue += 1;
    // console.log(counterValue);
    counter();
})

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    counter();
})

counter();