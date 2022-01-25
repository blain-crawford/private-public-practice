const h1 = document.createElement('h1');
h1.textContent = '0';
const body = document.querySelector('body');
const counterButton = document.createElement('button');
counterButton.textContent = 'CLICK TO INCREASE COUNT';

const increaseCount = () => {
  let counter = 0;
  return () => {
    h1.textContent = '';
    h1.textContent = counter;
    counter++;
  }
};
let counter = increaseCount()



body.appendChild(h1);
body.appendChild(counterButton);
counterButton.addEventListener('click', counter, false);