const h1Math = document.createElement('h1');
h1Math.textContent = '0';
const body = document.querySelector('body');
const increaseButton = document.createElement('button');
increaseButton.textContent = 'Increase!';
const decreaseButton = document.createElement('button');
decreaseButton.textContent = 'Decrease!';
body.appendChild(h1Math);
body.appendChild(increaseButton);
body.appendChild(decreaseButton);

const alterCounter = {
  counter: 0,
  increaseOrDecrease: function() {
    if(this.textContent === 'Increase!') {
      alterCounter.counter++;
      h1Math.textContent = '';
      h1Math.textContent = alterCounter.counter;
    } else if (this.textContent === 'Decrease!') {
      alterCounter.counter--;
      h1Math.textContent = '';
      h1Math.textContent = alterCounter.counter; 
    }
  }
};

increaseButton.addEventListener('click', alterCounter.increaseOrDecrease.bind(increaseButton), false);
decreaseButton.addEventListener('click', alterCounter.increaseOrDecrease.bind(decreaseButton), false)

const h1 = document.createElement('h1');
h1.textContent = '0';
const nameButton = document.createElement('button');
const neverButton = document.createElement('button');
nameButton.textContent = 'SAY MY NAME!';
neverButton.textContent = 'NO!';

const nameSayer = {
  name: 'Heisenberg',
  no: 'NO!',
  sayIt: function() {
    if(this.textContent === 'SAY MY NAME!'){
      h1.textContent = '';
      h1.textContent = nameSayer.name;
      console.log(this.textContent);
    }
    if(this.textContent === 'NO!') {
      h1.textContent = '';
      h1.textContent = nameSayer.no
      console.log(this.textContent);
    }
  }
};

body.appendChild(h1);
body.appendChild(nameButton);
body.appendChild(neverButton);
nameButton.addEventListener('click', nameSayer.sayIt.bind(nameButton), false);
neverButton.addEventListener('click', nameSayer.sayIt.bind(neverButton), false);
