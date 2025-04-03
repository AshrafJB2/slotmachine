import promptSync from 'prompt-sync';
const prompt = promptSync();
function deposit() {
    while (true){
        let deposit;
        deposit = parseFloat(prompt('Enter your bet: '));
        console.log('You have deposited: ' + deposit);
        if (isNaN(deposit) || deposit <= 0) {
            console.log('Invalid input. Please enter a number.');
        }
        else {
            return deposit;
        }
        }
}
deposit()