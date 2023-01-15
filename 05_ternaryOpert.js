
function maleMarriageEligibility(gender,age,name){

     var ageCondition = gender=="Male" && age>=21 
     ? `Hey, ${name} you are eligible for Marriage`
     : `Sorry, ${name} you are Not eligible for Marriage`

     console.log(ageCondition);

}
maleMarriageEligibility('Male',25,'Sachin');
maleMarriageEligibility('Male',17,'Sandip');
maleMarriageEligibility('Female',25,'Riya');