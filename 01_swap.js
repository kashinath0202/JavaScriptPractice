var num1= 100;
var num2 =200;

console.log('mum1',num1);
console.log('mum2',num2);

var temp;
temp=num1;
num1=num2;
num2=temp;

console.log('mum1',num1);
console.log('mum2',num2);


console.log('---------------------------------------------------------');

var num3= 300;
var num4 =400;
var num5 =500;

console.log('mum3',num3);
console.log('mum4',num4);
console.log('mum5',num5);

var temp;
temp=num3;
num3=num4;
num4=num5;
num5=temp;

console.log('mum3',num3);
console.log('mum4',num4);
console.log('mum5',num5);

console.log('------------------------- Without temp use --------------------------------');

var a = 20
var b = 50

 console.log('a Before',a);
 console.log('b Before',b);

a = a + b;
b = a - b;
a = a - b;

console.log('a After',a);
console.log('a After',b);
