const h1 = document.createElement('h1');
h1.textContent = '0';
const body = document.querySelector('body');
const nameButton = document.createElement('button');
nameButton.textContent = 'SAY MY NAME!';
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
      h1.textContent = this.no
      console.log(this);
    }
  }
};

body.appendChild(h1);
body.appendChild(nameButton);
nameButton.addEventListener('click', nameSayer.sayIt.bind(nameButton), false);
