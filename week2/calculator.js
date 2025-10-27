const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})


readline.question('Enter the first number: ', (num1)=>{
    num1 = Number(num1);
    readline.question('Enter the second number: ', (num2)=>{
        num2 = Number(num2);
        readline.question("Choose the operation: \n1. Add \n2. Substract \n3. Multipication \n4. Divide \n",(temp)=>{
            temp = Number(temp);

            if (temp == 1){
                add(num1,num2);
            }else if (temp == 2){
                substract(num1,num2);
            }else if (temp == 3){
                multiplication(num1, num2);
            }else if (temp == 4){
                divide(num1, num2);
            }else{
                console.log('The number is Invalid!')
            }

            readline.close();
        })
    })
})






function add(a,b) {
   sum = a+b;
   console.log(`The sum is ${sum}.`)
}


function substract(a,b){
    differnce = a-b;
    console.log(`The difference is ${differnce}.`)
}

function divide(a,b){

    if (b == 0){
        console.log('Error cannot be divided by 0.')
    }else{
        div = a/b;
        console.log(`The divided num is ${div}.`)
    }
    
}

function multiplication(a,b){
    mul = a*b;
    console.log(`The multiplication is ${mul}.`)
}