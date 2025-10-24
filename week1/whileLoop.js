const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Enter the number : ', (num)=>{
    num = Number(num);

    for (let i = 1;i<=num;i++) {

        if (i%2 == 0){
            console.log('*'.repeat(i))
        }
        
    }

    readline.close();
})