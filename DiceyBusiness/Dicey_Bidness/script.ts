export {};
const container: HTMLElement = document.getElementById('dice-container'),
    generateButton: HTMLElement = document.getElementById('generate-die'),
    rollButton: HTMLElement = document.getElementById('roll-die'),
    sumButton: HTMLElement = document.getElementById('sum-die');
let numOfDice: number = 0,
    diceArr: Die[] = [];

// Create a new dice object.
generateButton.addEventListener('click', () => {
    new Die(null);
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
    value: number;
    div: HTMLDivElement;
    constructor(value) {
        this.value = value;
        this.render();
        diceArr.push(this);
    }

    render() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = (numOfDice++).toString();
        this.roll();
        this.div.textContent = this.value.toString();
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
        this.div.textContent = this.value.toString();
    }
}
