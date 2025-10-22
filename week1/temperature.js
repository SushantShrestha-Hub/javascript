const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,

});


readline.question('Choose 1. C => F or 2. F => C: ', (num1) =>{
    
    num1 = Number(num1);
    if (num1 ==1) {
        readline.question('Enter the value in celsius: ', (num) =>{
        num = Number(num);

        let Fahrenheit = (num * 9/5) + 32;
        

        console.log(`${num}C is equal to ${Fahrenheit}F.`)

        readline.close();

    });
    } else if (num1 == 2 ){
        readline.question('Enter the value in Fahrenheit: ', (num) =>{
        num = Number(num);

        let celsius = (num - 32) * 5 / 9;
      console.log(`${num}°F is equal to ${celsius.toFixed(2)}°C.`);
      readline.close();

    })} else {
    console.log('Invalid choice. Please run the program again and choose 1 or 2.');
    readline.close();
}
});
