/* Logical Operators are used to combine two or more conditions together and return a single true or false value    */





//********+++++++++++++++++++++++++++++++++++++&&&&&&&&++++++++++++++
/*  01. && (And Operator)
    02. || (Or Operator)
    03. !  (Not Operator)
    */




    const name = 'Samiul'
    const lastName = 'Islam'
    const userAge = '25'
    // const lastTwoDigit = 20
  

const isChild = (userAge >= 0 && userAge <= 5)
const isSchoolStudent = (userAge > 5 && userAge <= 18) 
const isCollegeStudent = (userAge > 18 && userAge <= 24)
const isWorkingProfessional = (userAge > 24 && userAge <= 55)

console.log(isChild)
console.log(isSchoolStudent)
console.log(isCollegeStudent)
console.log(isWorkingProfessional)
