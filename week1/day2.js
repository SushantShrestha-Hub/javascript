const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

console.log("Simple Calculator");

readline.question('Enter the first number: ', (num1) =>{
    readline.question('Enter the second number: ', (num2) => {
        num1 = Number(num1);
        num2 = Number(num2);
        

        let sum = num1 + num2;
        let sub = num1 - num2;
        let mul = num1 * num2;
        let div = num1 / num2;
        let remainder = num1 % num2;


        console.log(`The sum of ${num1} and ${num2} is ${sum}.`);

        console.log(`The difference of ${num1} and ${num2} is ${sub}.`);

        console.log(`The product of ${num1} and ${num2} is ${mul}.`);

        console.log(`The quotient of ${num1} and ${num2} is ${div}.`);

        console.log(`The reminder of ${num1} and ${num2} is ${remainder}.`);

        readline.close();
    });
});
