
// 1. WAP to print numbers from 5 to 15 by incrementing 1
// 2. WAP to print numbers from 50 to 40 by decrementing by 1
// 3. WAP to find first 15 odd numbers
// 4. WAP to find first 10 even numbers
// 5. WAP to print table of 5 like → 5 10 15 20 25 …… 50
// 6. WAP to print table of 10 like 10 20 30 40 …… 100
// 7. WAP to print table of 10 in reverse order like → 100 90 80 70 …… 10

i=0
while(i<=10){
   if(i%2==0){
    console.log(i);
      if(i==6){
        break
      }
   }
   i++
}

console.warn('@@@@@@@@@@@@@@@@@@@@@@@@@');

num=10;
while(num<=100){
    console.log(num);
    num=num+10
}

console.warn('@@@@@@@@@@@@@@@@@@@@@@@@@');

num=100;
while(num>=10){
    console.log(num);
    num=num-10
}

console.warn('@@@@@@@@@@@@@@@@@@@@@@@@@');

count=0;
num=0;
while(num<20){
    if(num%2==0){
        console.log(num);
      count=count+1;
      if(count==5){
        break
      }
    }
    num++
}