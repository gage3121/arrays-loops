const student = ['Gage', 'Dani', 'Gabrielle', 'Nathan'];
//console.log(student.length)

//***** ACCESSING ITEMS IN ARRAY
//console.log(student[1]);
//console.log(student[student.length - 1]); //Nathan

student[0] = 'Matthew';
//console.log(student);

const valuePrinter = (array, index) => {
    return array[index];
}

//console.log(valuePrinter(student, 2));

//Write a function that takes an array of something and tells you if the name 'Greg' is in that array
