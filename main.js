/* 

console.log('Hello world');

prompt('What is your name');

// String, Number, Boolean, Object, Array
// String
let name = 'John';
const idcard = '1234';

console.log(firstname);
// Number
let age = 25;
let height = 5.9;
//Boolean
let isMarried = false;
firstname = 'xxxx';
idcard = '5678';
console.log('my name is ', firstname, 'and I am ',age,'years old.');


การใช้ ชนิดของตัวแปรต่างๆ
let number1 = 5;
let number2 = 6;

let condition1 = number1 >= number2; // Boolean ค่าที่ได้จะเป็น true or false
console.log('new number is',condition1);//48


let score = prompt('Enter your score');
console.log('your score is ' + score);

if (score >= 80){
        console.log('you are grade A');
} else if (score >= 70){
        console.log('you are grade B');
} else if (score >= 60){
        console.log('you are grade C');
} else if (score >= 50){
        console.log('you are grade D');
} else {
        console.log('you are grade F');
} 

let number1 = 10;
let number2 = 20;

let condition = number1 >= 3 || number2 >= 5; // Boolean ค่าที่ได้จะเป็น true or false
console.log('result of condition',condition);

let age = 25;
let gender = 'male';

if (age >= 20 && gender == 'male') {
        console.log('You are male adult');
}

let number = 21;

if(!(number % 2 == 0)) {
        console.log('your are odd number');
} else {
        console.log('your are even number');
}



let counter = 0;
console.log('while loop');

while(counter <= 10) { //true
        console.log('while loop ');
        counter++;
}

let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1, age2, age3, age4);

let ages = [90,35,40,20,50];

console.log(ages);
ages.sort();
console.log(ages);



let name_list = ['John', 'Jane', 'Doe', 'Smith'];
name_list.push('Doe');
console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[1]);
console.log(name_list[2]);

for(let i = 0; i < name_list.length; i++) {
        console.log(name_list[i]);
}


//object
let student = [{
        name: 'zz',
        age: 25,
        grade: 90
}, {
        name: 'aa',
        age: 30,
        grade: 80
}, {
        name: 'bb',
        age: 35,
        grade: 70
}];

student.push({
        name: 'cc',
        age: 40,
        grade: 60
});

student.pop();

for(let i = 0; i < student.length; i++) {
        console.log('student',i+1);
        console.log('name',student[i].name);
        console.log('age',student[i].age);
        console.log('grade',student[i].grade);
}

let score1 = 50
let score2 = 90
let grade = ''

function calculategrade(score) {
        if (score >= 80){
                grade = 'A'
        } else if (score >= 70){
                grade = 'B'
        } else if (score >= 60){
                grade = 'C'
        } else if (score >= 50){
                grade = 'D'
        } else {
                grade = 'F'
        }
        return grade
}
let student1 = calculategrade(score1)
let student2 = calculategrade(score2)
console.log('student grade is',student1,student2);


let score =[10,20,30,40,50];
for (let i = 0; i < score.length; i++){
        console.log('student',i+1,'grade is',calculategrade(score[i]));
}
*/  
/*
score[0] = score[0] * 2;
score[1] = score[1] * 2;
score[2] = score[2] * 2;
score[3] = score[3] * 2;
score[4] = score[4] * 2;


score = score.map((s) => {
        return s * 2;
});

scores.forEach((s) => {
        console.log('score is',s);
});

let scores = [10,20,30,40];
let newscortes = [];

for(let i = 0; i < scores.length; i++) {
        newscortes.push(scores[i] * 2);
        if(scores[i] >= 30) {
                break;
        }
}

let newscorte = scores.filter((s) => {
        if(s >= 30) {
                return true;
        } else {
                return false;
        }
}); 

*/
let students = [{
        name: 'zz',
        age: 25,
        grade: 90
}, {
        name: 'aa',
        age: 30,
        grade: 80
}, {
        name: 'bb',
        age: 35,
        grade: 70
}];

let student = students.find((s) => {
        if(s.name == 'zz') {
                return true;
        }
});

let duplicate = students.map((s) => {
        s.score = s.score * 2;
});     

let highscore_student = students.filter((s) => {
        return s.score >= 80;
        return true;
});
console.log('student',student);