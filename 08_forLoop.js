for (let i = 5; i <= 15; i++) {
  console.log(i);
}

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');

for (let i = 50; i >= 40; i--) {
    console.log(i);
}

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');

for(let i=0; i<=100; i++){
    var result = i%2==0;
    if(i==15){
        break
    }
    console.log(result);
}

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');

count=0;

for(let odd=0; odd<=100; odd++){
     if(odd%2!=0){
        console.log(odd);

        count=count+1;
        if(count==15){
            break
        }
        
     }
}
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');

evenCount=0;
for(let even=0; even<=100; even++){

      if(even%2==0){
        console.log(even)
      
        evenCount=evenCount+1 

      if(evenCount==10){
          break;
      }
      }
}
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');

for(let num=0; num<=100; num=num+5){
     
       console.log(num);
}


console.log('@@@@@@@##############################@@@@@@@@@@@@@@@@@@@');

oddCount=0;
for(let odd=0; odd<=100; odd++){
   if(odd%2==0){
        console.log(odd);
      oddCount=oddCount+1;
      if(oddCount==5){
        break
      }
   }
}

console.log('@@@@@@@##############################@@@@@@@@@@@@@@@@@@@');

for(let i=5; i<=50; i=i+5){
    console.log(i);
}
console.log('@@@@@@@');

for(let i=10 ; i<=100; i=i+10){
    console.log(i);
}

console.log('@@@@@@@');
for(let r=100; r>=10; r=r-10){
  console.log(r);
}

console.log('!!!!!!!!!!!!!!!!!!!!@@@@@@@');

for(let i=0; i<=50; i++){
    if(i%2==0){
        console.log(i);
      if(i==16){
        break
      }
    }
}