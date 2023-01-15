

var greatestNumber =  function(num1,num2){
   
    var result = num1>num2?num1:num2
     console.log(result);
}
greatestNumber(10,-10);
greatestNumber(800,899);
greatestNumber(100,99);

var checkNum = function(num1){

     var result = num1%2==0 ? 'EVEN' : 'ODD';
     console.log(result);
}
checkNum(24);
checkNum(25);
checkNum(18);
checkNum(0);
checkNum(11);


var num = function(val1){

     return val1%2==0 ? 'Even' : 'Odd';
}
var result = num(22);
console.log(result);


num1=10;
num2=40;
num3=30;

var result = (num1>num2)
?(num1>num3? num1:num3)
:(num2>num3?num2:num3)

console.log(result);




n1=2;
n2=4;
n3=10;


greatest = (n1>n2)
?(n1>n2?n1:n2)
:(n2>n3?n2:n3)
console.log(greatest);