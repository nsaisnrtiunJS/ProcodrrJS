const message = "Hello World";
// I can transform into UpeertCase/LowerCase like this also 
const capitalMsg = message.toUpperCase();
const smallMsg = message.toLowerCase();


// LENGTH CHECK
/*console.log(message[3]);
console.log(message[5]);
*/


// TRANSFORM INTO UPPERCASE/LOWERCASE 
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());



// TRIM extra spaces
const extraSpace = '          Hello this is Sam.         '
const finalMessage = extraSpace.trim().toLowerCase().toUpperCase();
/*console.log(extraSpace);
console.log(extraSpace.trim());
console.log(extraSpace.trimStart());
console.log(extraSpace.trimEnd())
console.log(finalMessage);
*/




// Includes()---this is use for checking works that which I want to check, it is exist or not 

console.log(finalMessage.includes('HELLO'));
console.log(finalMessage.includes('HELLO THIS IS SAM'))



// indexOf()---- it is use to display letters number
console.log(finalMessage.indexOf('M'))
console.log(finalMessage.indexOf('T'))