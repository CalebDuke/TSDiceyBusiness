const container = document.getElementById('dice-container'),
    generateButton = document.getElementById('generate-die'),
    rollButton = document.getElementById('roll-die'),
    sumButton = document.getElementById('sum-die');
let numOfDice = 0,
    diceArr = [];

// Create a new dice object.
generateButton.addEventListener('click', () => {
    new Die();
    console.log(diceArr);
});

// Roll the dice.
rollButton.addEventListener('click', () => diceArr.forEach(die => die.roll()));

// Sum the dice.
sumButton.addEventListener('click', () => {
    if (diceArr.length === 0) {
        alert('no dice!')
    } else {
        let sum = 0;
        diceArr.forEach(die => {
            sum = sum + die.value
        });
        alert(sum);
    }
});

class Die {
    constructor(value) {
        this.value = value;
        this.render();
        diceArr.push(this);
    }

    render() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = numOfDice++;
        this.roll();
        this.div.textContent = this.value;
        container.appendChild(this.div);
        this.div.addEventListener('click', () => this.roll());
        this.div.addEventListener('dblclick', () => {
            const index = diceArr.indexOf(this);
            if (index > -1) {
                diceArr.splice(index, 1);
            }
            container.removeChild(this.div);
        });
    }

    roll() {
        let randomVal = Math.floor((Math.random() * 6) + 1);
        this.value = randomVal;
        this.div.textContent = this.value;
    }
}
