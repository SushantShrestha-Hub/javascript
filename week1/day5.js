// learing array

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,

})

readline.question('Mark of student 1 : ',(num1) =>{
    let marks= [];
    num1 = Number(num1);
    marks.push(num1);

    readline.question('Mark of student 2 : ',(num2) =>{
        num2 =Number(num2);
        marks.push(num2)
        readline.question('Number of student 3 : ',(num3) =>{
            num3 = Number(num3);
            marks.push(num3)
            readline.question('Number of student 4 : ',(num4) =>{
                num4 = Number(num4);
                marks.push(num4)
                readline.question('Number of student 5 : ',(num5) =>{
                    num5 = Number(num5);
                    marks.push(num5)

                    console.log(`The marks of the students are [ ${marks} ].`)
                    console.log('The Highest mark is ',Math.max(...marks))
                    console.log('The lowest mark is ',Math.min(...marks))

                    let sum = 0;
                    for (let mark of marks){
                        sum = sum +  mark;

                    }
                    let avg = sum/marks.length;
                    console.log(`The average of the marks is : ${avg}`)


                    readline.close();                })
            })
        })
    })
})