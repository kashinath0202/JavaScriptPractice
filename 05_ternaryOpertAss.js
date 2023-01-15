
var  interviewEligibility = function(grad_score,HSC_score,SCC_score,candidateName){

    var criteria = grad_score>=70 && HSC_score>=80 && SCC_score>90
    ? `Congrats ${candidateName} you are eligible for TCS interview.`
    :`Sorry ${candidateName} you are Unfortunately not eligible for interview`

    console.log(criteria);

}
interviewEligibility(80,86,91,'Pankaj');
interviewEligibility(70,80,90,'Sachin');