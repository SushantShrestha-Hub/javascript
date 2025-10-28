const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let count = 1;

function askNumber() {
    if (count > 5) {
        // All numbers entered, do array operations
        console.log("Numbers: ", arr);

        let squares = arr.map(num => num * num);
        console.log("Squares: ", squares);

        let evens = arr.filter(num => num % 2 === 0);
        console.log("Even numbers: ", evens);

        let total = arr.reduce((acc, num) => acc + num, 0);
        console.log("Sum of numbers: ", total);

        readline.close();
        return;
    }

    readline.question(`Enter number ${count}: `, (num) => {
        arr.push(Number(num));
        count++;
        askNumber(); // ask next number
    });
}

// Start asking
askNumber();
