//++++++++++++++     "If Statement"        ++++++++++

/*   Why do we use If Statement in JavaScript?-----In JavaScript, IF Statements are used to control the flow of a program by exicuting different blocks of code based on a Condition.         */


const userName = "Samiul Islam"
const userAge = -2
// const userName = prompt('Enter your Name:') || 'Sam';
// const userAge =parseInt( prompt('Enter your Age:')) || 22;
// let gender = prompt(`Are you a Male or Female?`)


console.log(`Name: ${userName}`)
console.log(`Age: ${userAge}`)

// if(gender === 'He' || gender === 'She'){
//     console.log("sex: " + gender);
//   }
  

const isSchoolStudent = (userAge >=5) && (userAge <= 18)
const isCollegeStudent = (userAge > 18) && (userAge <= 24)
const isWorkingProfessional = (userAge >24) && (userAge <= 55) 

// debugger use for stop the code reading

if(userAge >= 0 && userAge <= 5){
    console.log(`${userName} is a child.`)
    console.log(`He/She is always playing,crying & drinking. `)
    // console.log(`${gender} is always playing,crying & drinking. `)
}
if(userAge > 5 && userAge <= 18){
    console.log(`${userName} is a school student.`)
    console.log(`He/She is a brilliant student.`)
}
if(userAge > 18 && userAge <= 24){
    console.log(`${userName} is a college student.`)
    console.log(`He/She is learning Computer Science.`)
}
if(userAge > 24 && userAge <= 55){
    console.log(`${userName} is a working professional.`)
    console.log(`He/She is a web developer.`)
}
if(userAge > 55 && userAge <= 120){
    console.log(`${userName} is retired.`)
    console.log(`He/She reads newspaper everyday.`)
}
if(userAge > 120){
    console.log(`${userName} is immortal.`)
} else{
    console.log(`Please enter a valid number`)
}