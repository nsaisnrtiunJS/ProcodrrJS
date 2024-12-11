const message = "Hello World";
const hideNumber = '8789';
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
const extraSpace = '          Hi this is Sam.         '
const finalMessage = extraSpace.trim().toLowerCase().toUpperCase();
/*console.log(extraSpace);
console.log(extraSpace.trim());
console.log(extraSpace.trimStart());
console.log(extraSpace.trimEnd())
console.log(finalMessage);
*/




/* Includes()---this is used for checking words that which I want to check, it is exist or not 

console.log(finalMessage.includes('HELLO'));
console.log(finalMessage.includes('HELLO THIS IS SAM'))
*/


/* indexOf()---- it is use to display letters number
console.log(finalMessage.indexOf('M'))
console.log(finalMessage.indexOf('T'))
If I check a letter which is not exist in finalMessage, lets see what will happen---it will print "-1"
console.log(finalMessage.indexOf('Z')); */



/* Replace() --   if I want to replace any words then I have to use "REPLACE()" function 
console.log(finalMessage.replace("THIS IS", "I am"))   */

/* if I want to ReplaceAll the letters then I have to use ReplaceAll() function 
console.log(finalMessage.replaceAll('I', 'i'))         */




/* concat() function is used for add/join more then one sentences 
 ami jodi one word a explain kori tahole concat()=Add something 
console.log(message + " " + finalMessage);
console.log(message.concat(extraSpace, finalMessage, '.'))    */




/* padStart() use for hide starting numbers/String 
console.log(hideNumber.padStart(11, '*'))
console.log(hideNumber.padStart(7, '.'))

 padEnd() use for hide starting numbers/String 
console.log(hideNumber.padEnd(10, '*'))
console.log(hideNumber.padEnd(11, '.'))    */



/* charAt() use to find pertiqular letter by it's index number 
console.log(message.charAt(7))
console.log(message.charAt(9))        */



// charCodeAt() use to find code of any letters or symbol's code which is defined in ASSCII 

console.log(message.charCodeAt("9"))