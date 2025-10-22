const { stdin, stdout } = require('process');

const readline = require('readline').createInterface({
    input:stdin,
    output:stdout,
    
});

let price;

readline.question('Please enter your age : ', (num) =>{

    num = Number(num);

    if (num >= 60) {
        price = 6
        console.log(`Your ticket price is ${price}`);
    }else if (num >= 18) {
        price = 10;
        console.log(`Your ticket price is ${price}`)
    }else if (num >= 13) {
        price = 8
        console.log(`Your ticket price is ${price}`)
    }else if (num >= 5) {
        price = 5
        console.log(`Your ticket price is ${price}`)
    }else {
        console.log('Your ticket is Free')
    }

    readline.close();
});