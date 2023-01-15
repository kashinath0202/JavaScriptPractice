

function femaleMarriageEligibility(gender,age ,name){

     if(gender="Female" && age>=18){

        return `Hey ${name} you are eligible for Marriage.`
     }else{
        return `Sorry!, ${name} you are not eligible for marriage.`
     }

}
var result = femaleMarriageEligibility("Female",16,'Jeni');
console.log(result);
var result2 = femaleMarriageEligibility("Female",18,'Jenifer');
console.log(result2);




console.warn("//////////////////////////////////////////////////////////////////////////");


function checkValue(num1){
    if(num1%2==0){
        return "EVEN"
    }else{
        return "ODD"
    }
}
var result = checkValue(45);
console.log(result);

var result1 = checkValue(42);
console.log(result1);


function checkChar(str){
  
     if((str.length)>=10){
       
         console.log('More than 10 Chars');
     }else{
        console.log('Less than 10 chars');
     }
}
checkChar('JavaScript');
checkChar('Java');
checkChar('AngularPro');


function startValue(str){

     if(str.startsWith('Java') && str.endsWith('Language')){
          console.log(true);
     }else{
        console.log(false);
     }
}
startValue('JavaScript Language');
startValue('TypeScript Language');
startValue('Java');