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
  increaseOrDecrease: function () {
    if (this.textContent === 'Increase!') {
      alterCounter.counter++;
      h1Math.textContent = '';
      h1Math.textContent = alterCounter.counter;
    } else if (this.textContent === 'Decrease!') {
      alterCounter.counter--;
      h1Math.textContent = '';
      h1Math.textContent = alterCounter.counter;
    }
  },
};

increaseButton.addEventListener(
  'click',
  alterCounter.increaseOrDecrease.bind(increaseButton),
  false
);
decreaseButton.addEventListener(
  'click',
  alterCounter.increaseOrDecrease.bind(decreaseButton),
  false
);

const h1 = document.createElement('h1');
h1.textContent = '0';
const nameButton = document.createElement('button');
const neverButton = document.createElement('button');
nameButton.textContent = 'SAY MY NAME!';
neverButton.textContent = 'NO!';

const nameSayer = {
  name: 'Heisenberg',
  no: 'NO!',
  sayIt: function () {
    if (this.textContent === 'SAY MY NAME!') {
      h1.textContent = '';
      h1.textContent = nameSayer.name;
      console.log(this.textContent);
    }
    if (this.textContent === 'NO!') {
      h1.textContent = '';
      h1.textContent = nameSayer.no;
      console.log(this.textContent);
    }
  },
};

body.appendChild(h1);
body.appendChild(nameButton);
body.appendChild(neverButton);
nameButton.addEventListener('click', nameSayer.sayIt.bind(nameButton), false);
neverButton.addEventListener('click', nameSayer.sayIt.bind(neverButton), false);

const Character = (name, level, strength, healingAbility) => {
  let dead = false;
  let health = level / 4;
  let attackStrength = strength;
  let healingStrength = healingAbility;
  const getName = function () {
    return name;
  };
  const getLevel = function () {
    return level;
  };
  const getStrength = function () {
    return strength;
  };
  const gethealingAbility = function () {
    return healingAbility;
  };
  const getHealth = function () {
    return health;
  };

  const takeDamage = function (amount) {
    health -= amount;
    if (health <= 0) {
      dead = true;
    }
  };

  const receiveHealing = function (amount) {
    let fullHealth = level / 4;
    if(health <= fullHealth) {
      if(fullHealth - health >= amount) {
        health += amount
      } else {
        health = fullHealth;
      }
    }
  };
  const attack = function (enemy) {
    if(dead === false) {
      if(enemy.getHealth() > 0 && enemy.getHealth() - attackStrength >= 0) {
        enemy.takeDamage(attackStrength);
      } else {
        while(enemy.getHealth() > 0) {
          enemy.takeDamage(1)
        }
      }
  }
    console.log(`${name} has struck! for ${attackStrength} damage!`);
  };

  const heal = function (ally) {
    if (ally.aliveOrDead() === 'Alive') {
      ally.receiveHealing(healingStrength);
      console.log(
        `${name} has healed ${ally.getName()} for ${healingStrength} health!`
      );
    }
  };
  const aliveOrDead = function () {
    if (dead === true) {
      return 'DEAD';
    }
    return 'Alive';
  };

  return {
    getName,
    getLevel,
    getStrength,
    gethealingAbility,
    getHealth,
    aliveOrDead,
    takeDamage,
    receiveHealing,
    attack,
    heal,
  };
};

let christina = Character('Christina', 100, 5, 20);
let blain = Character('Blain', 120, 10, 10);

const christinaAttack = function () {
  christina.attack(blain);
  h1Math.textContent = '';
  h1Math.textContent = blain.getHealth();
} 

const blainAttack = function () {
  blain.attack(christina);
  h1.textContent = '';
  h1.textContent = christina.getHealth();
};

const christinaHeal = function () {
  christina.heal(christina);
  h1.textContent = '';
  h1.textContent = christina.getHealth();
} 

const blainHeal = function () {
  blain.heal(blain);
  h1Math.textContent = '';
  h1Math.textContent = blain.getHealth();
};


let blainAttackButton = document.createElement('button');
blainAttackButton.textContent = 'Blain Attack'
let christinaAttackButton = document.createElement('button');
christinaAttackButton.textContent = 'Christina Attack'
body.appendChild(blainAttackButton);
body.appendChild(christinaAttackButton);

let blainHealButton = document.createElement('button');
blainHealButton.textContent = 'Blain Heal'
let christinaHealButton = document.createElement('button');
christinaHealButton.textContent = 'Christina Heal'
body.appendChild(blainHealButton);
body.appendChild(christinaHealButton);

blainAttackButton.addEventListener('click', blainAttack, false);
christinaAttackButton.addEventListener('click', christinaAttack, false);
blainHealButton.addEventListener('click', blainHeal, false);
christinaHealButton.addEventListener('click', christinaHeal, false);



