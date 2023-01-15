var grade = function(score){
       
      if(score<0){
         console.log('Sorry Invalid Input ');
      }else if (score<35) {
        console.log('Sorry,You Failed');
     }else if (score>=35 && score<60) {
        console.log('Congrats, You are Pass & Grade Your C ');
     }else if(score>=60 && score<=75){
         console.log('Congrats, You are Pass & Grade Your B ');
     }else if(score>=75 && score<=90){
         console.log('Congrats, You are Pass & Grade Your A ');
     } else if(score>=90 && score<=100){
         console.log('Congrats, You are Pass & Grade Your A+ ');
     }else if(score>100){
      console.log('Sorry Invalid Input ');
     }else if(score===value){
      console.log('Sorry Invalid Inputs,Not Accept string value');
     }
     var value = " ";
}
grade(30);
grade(50);
grade(65);
grade(80);
grade(95);
grade(-1);
grade(80);
grade(-10);
grade(80);
grade(101);
grade('Forty Five Score');