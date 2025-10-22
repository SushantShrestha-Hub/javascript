// The Day 3 is about how you learn to use if, ifelse and else

const readline = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout,

});


readline.question('What is your age ?: ', (num) => {
        
        num = Number(num);

        if (num >= 60) {
                console.log('You are a senior.');
                
        }else if (num >= 20) {
                console.log('You are an adult.');
        }else if (num >= 13) {
                console.log('You are a teenager.');
        } else {
             console.log('You are a child.');   
        }

        readline.close();
});



    

