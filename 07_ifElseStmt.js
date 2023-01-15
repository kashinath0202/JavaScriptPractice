var votePermission = function(age){
  if(age>=18){
     console.log('You are eligible for voting');
  }else{
    console.log('You are not eligible for voting');
  }
       
}
votePermission(18);
votePermission(17);
votePermission(19);

// var checkGender = function(str){

//      if(str=='Male'){
//         console.log("Male");
//      }else{
//          console.log('Female')
//      }
// }
// checkGender(prompt("Enter Gender")

checkValue = function(num1){

      if(num1%2==0 || num1>=10){
        console.log('This number is Even & greater than 10');
      }else{
        console.log('This number is Odd & Less than 10');
      }
}
checkValue(7);
checkValue(12);
checkValue(5);
checkValue(100);