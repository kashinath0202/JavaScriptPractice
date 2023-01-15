
var checkNumber = function(num1){

     var result = num1%2==0 ? 'Even' : 'Odd';
     console.log(result);
}
checkNumber(2);
checkNumber(45);
checkNumber(12);
checkNumber(07);
checkNumber('71');


var grNumber =  function(n1,n2,n3){

    var result = (n1>n2)?
                 (n1>n2?n1:n2):
                 (n2>n3?n2:n3)
     console.log(result);
}
grNumber(50,30,40);

function number(num1,num2,num3){

     if(num1>num2){
        console.log(num1);
     }else if(num2>num3){
         console.log(num2);
     }else{
        console.log(num3);
     }
}
number(180,50,100);