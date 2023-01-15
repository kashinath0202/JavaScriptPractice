i=0;
do{
    i++;
    console.log(i);
}while(i<50);

console.warn("#################################");

count=0;
i=0
do{
   i++;
   if(i%2==0){
       console.log(i);
       count=count+1;
       if(count==10){
            break
       }
   }
}while(i<=50)