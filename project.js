import promptSync from 'prompt-sync';
const prompt = promptSync();
function depositFunc() {
    while (true){
        let NumberdepositAmount;
        NumberdepositAmount = parseFloat(prompt('Enter your bet: '));
        if (isNaN(NumberdepositAmount) || NumberdepositAmount <= 0) {
            console.log('Invalid input. Please enter a number.');
        }
        else {
            return NumberdepositAmount;
        }
        }
}

function linesFunc() {
    while (true){
        let NumberOfLines;
        NumberOfLines = parseInt(prompt('Enter your number of lines you wanna bet on (1-3): '));
        if (isNaN(NumberOfLines) || NumberOfLines <= 0 || NumberOfLines > 3) {
            console.log('Invalid input. Please enter a number.');
        }
        else {
            return NumberOfLines;
        }
    }
}

function betFunc(balance, lines){
    while (true) {
        let betAmount = prompt('Enter bet per row amount');
        if (balance < betAmount * lines) {
            console.log('Insufficient balance. Please deposit more.');
        } else {
            return betAmount * lines;
        }
    }
}

function spinFunc(lines, bet) {
    let symbols = ['A', 'B', 'C'];
    let first_row = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ]
    let second_row = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ]
    let third_row = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ]
    console.log(first_row);
    console.log(second_row);
    console.log(third_row);
    if (first_row[0] === first_row[1] && first_row[1] === first_row[2] || second_row[0] === second_row[1] && second_row[1] === second_row[2] || third_row[0] === third_row[1] && third_row[1] === third_row[2]) {
        if ((first_row[0] === first_row[1] && first_row[1] === first_row[2] && second_row[0] === second_row[1] && second_row[1] === second_row[2] || second_row[0] === second_row[1] && second_row[1] === second_row[2] && third_row[0] === third_row[1] && third_row[1] === third_row[2]) {
            console.log('You won!');
            balance = balance + bet;
            console.log('your balance is ' + balance)
        }
        console.log('You won!');
        balance = balance + bet;
        console.log('your balance is ' + balance)
    }
    else {
        console.log('You lost!');
        balance -= bet
}


let balance = depositFunc();
const lines = linesFunc();
const bet = betFunc(balance, lines);
