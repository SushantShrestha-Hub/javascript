const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let students = [];
let totalStudents = 0;
let currentStudent = 1;

readline.question("Enter the num of Students: ",(num)=>{
    totalStudents = Number(num);

    if (isNaN(totalStudents) || totalStudents == 0){
        console.log("Please provide with valid answer.")
    }else{
        askStudentInfo();
    }
})

function askStudentInfo() {
    readline.question(`Write the name of the student ${currentStudent} : `,(name)=>{
        readline.question(`Enter the mark obtained by ${name} : `,(mark)=>{
            mark = Number(mark);
            if (isNaN(mark) || mark < 0 || mark > 100){
                console.log('Please enter a valid mark between 0 and 100 mark.')
                askStudentInfo();
            }else {
                students.push({name, mark});
                currentStudent++;

                if (currentStudent<=totalStudents){
                    askStudentInfo();
                }else{
                    showReport();
                    readline.close();
                }
            }
        })
    })
}

function showReport() {
    console.log("\n Student Report");
    console.log("--------------------");
    
    students.forEach((s)=>{
        console.log(`${s.name} : ${s.mark}`)

    })

    console.log("---------------------")
    const highest = Math.max(...students.map((s) => s.mark));
    const lowest = Math.min(...students.map((s) => s.mark));
    const sum = students.reduce((a, b) => a + b.mark, 0);
    const avg = sum / students.length;

    const topStudent = students.find((s) => s.mark === highest);
    const lowStudent = students.find((s) => s.mark === lowest);

    console.log(`Highest Mark: ${highest} (${topStudent.name})`);
    console.log(`Lowest Mark: ${lowest} (${lowStudent.name})`);
    console.log(`Average Mark: ${avg.toFixed(2)}`);
    

}