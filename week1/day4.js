// loops


const readline = require('readline').createInterface({

    input:process.stdin,
    output:process.stdout,
});


readline.question('Multipication of : ', (num) =>{
     num = Number(num)

    for (i=1; i<=10; i++){
        let mul = num*i;
        console.log(`${num} * ${i} = ${mul} `)
    }

    readline.close();
});



