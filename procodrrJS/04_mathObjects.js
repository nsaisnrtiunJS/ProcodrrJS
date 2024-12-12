/*                                         MATH IN JAVA-SCRIPT 
 Mathematical Operators:-
 1.Aditional Operators: +
 2.Subtraction Operators: -
 3.Multiplication Operators: *
 4.Division Operators: /
 5.Remainder Operators: % 
 6.Exponention Operators: **
 */

 let x = 5;
 let y = 4;
 /*console.log(x + y);
 console.log(x - y);
 console.log(x * y);
 console.log(x / y);
 console.log(x % y);
 console.log(x ** y);
 console.log(5*5*5*5);
 */


/*                      MATH OBJECT IN JAVASCRIPT
Properties on Math Object:
A. MATH.PI
B. MATH.SQRT2
C. MATH.E
*/

/*            Mathods on Math Object 
1.math.sqrt(x)
2.math.pow(x,y)
3.math.floor(x)
4.math.ceil(x)
5.math.round()
6.Math.random()
*/



/*  Value of PI 
console.log(Math.PI)   */

/* You can find SquareRoot Value like this 
console.log(Math.sqrt(2))         */

/* You can do Power of any number  
console.log(Math.pow(2, 2))
console.log(Math.pow(5, 3))          */

// you can decrease a decimel number to a roundof Number by using- Floor()
console.log(Math.floor(3.756))
console.log(Math.floor(-2.121))
/* Agar mujhe floor ke andar hi ek random number chahiye jo ki "0 to 50/75/100/any nuber" ho to ---lets see the example */
console.log(Math.floor(Math.random() * 50))

// you can increase a decimel number to a roundof Number by using- ceil()
console.log(Math.ceil(3.121))
console.log(Math.ceil(-2.756))     
console.log(Math.ceil(Math.random() * -5))

/* using Math.round(x) you can roundOf a decimel number 
console.log(Math.round(2.49))
console.log(Math.round(2.50))          */

/* using Math.random() you will get a Random number between "0 to 1" ----Every time you will get a different number   
**** if I want a random number between "0 to 50" then I have to use "Math.random()*50"
you can write any number which you want in place of 50/75/100/1021 any number***
*/
console.log(Math.random())
console.log(Math.random() * 100)

// Here I want a random number between "5 to 10"---lets see an example
// console.log(Math.ceil(Math.random() * 4) +6 )
// console.log(Math.floor(Math.random() * 10) + 11)