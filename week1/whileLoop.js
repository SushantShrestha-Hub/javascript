const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Enter the number : ', (num)=>{
    num = Number(num);

    let sum = 0;
    let i = 1;

    while (i <=num){
        if (i%2 == 0) {
            sum = sum +i ;
            
        }
        i++;
        
    

    }
    console.log(`${sum}`)
    readline.close();
})