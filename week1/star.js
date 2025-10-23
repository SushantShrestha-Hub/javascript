// for (j=5;j>=1;j--){
//     console.log("*".repeat(j));
// }


const readline = require('readline').createInterface({

    input:process.stdin,
    output:process.stdout,
})


readline.question('Enter the Number : ', (num)=> {
    num = Number(num);
    let sum =0;
    for (i=1;i<=num;i++) {

        sum = sum + i;

    }
    
    
  console.log(`The sum from 1 to ${num} is ${sum}.`);
    readline.close();
})