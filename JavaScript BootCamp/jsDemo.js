// a=9;
// console.log(a);

// console.log(typeof (a));

// var a = 9;

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// let count = 1;

function grade(score){
    if(score>=75) {
        return "A";
    }
    else if(score>=65){
        return "B";
    }
    else if(score>=55) {
        return "C";
    }
    else if (score>=35) {
        return "S";
    }
    else {
        return "F";
    }
}

let student1_marks = 90;
console.log(grade(student1_marks));

let student2_marks = 70;
console.log(grade(student2_marks));


let student3_marks = 60;
console.log(grade(student3_marks));

let student4_marks = 50;
console.log(grade(student4_marks));

let student5_marks = 30;
console.log(grade(student5_marks));

// Day One is finished

