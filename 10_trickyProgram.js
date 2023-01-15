// 1. Count the total number vowels using includes() for string → “I am very good IT Developer”
// 2. Write a function to get the sum of cube of numbers from 1 to 5. 
//    Ex→ 1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 + 5*5*5
// 3. For the given string1→ “Hard work always pays back”, string2 → “Soon I will be Angular IT Champ” write a functions as mentioned below.
// 3.1. Function oddPositionedChars() with one arg
// 3.1.1. Log only odd positioned chars on console and do not consider empty spaces
// 3.1.2. Invoke or call this function for above given string1 and string2 

str = 'I am very good IT Developer';
lowerStr = str.toLowerCase();
myVowels="aeiou";
count=0;
for(let i=0; i<=str.length; i++){
    strChar=str.charAt(i);
    result = myVowels.includes(strChar);
    if(result){
        count=count+1
    }
}
console.log(count);



str2=' I am Angular Developer';
toLower = str2.toLowerCase();
vowels = 'aeiou';
totalVoles=0;

for(let i=0 ; i<=str2.length;i++){

     chars = str2.charAt(i);
     machVowels = vowels.includes(chars);
     if(machVowels){
        totalVoles=totalVoles+1
     }
}
console.log(totalVoles);

console.warn('################################');

var cubeNum = function(num1,num2,num3){

     result = num1*num2*num3;
     console.log(result);
}
cubeNum(2,3,4);
cubeNum(5,3,4);

console.warn('################################');

 var getVowels = function(str3){
 lowers = str3.toLowerCase();
 vowel = 'aeiou';
 voCount=0;
 for(let i=0; i<str3.length; i++){
     totalChars = str3.charAt(i);
     matchVov = vowel.includes(totalChars);
     if(matchVov){
        voCount=voCount+1
     }
 }
 console.log(voCount);
}
   
getVowels('Kashi')

console.warn('#####');

   add=0;
     for(let n=0; n<=3;n++){
        add = add+n*n*n;
     }
     console.log(add);

console.warn('!!!!!!!!!!!!!!!!!!!!');

   emStr="";
     str4= 'I an Front End Developer';
     for(let i=0; i<=str4.length;i++){
       var chars = str4.charAt(i)
        if(i%2!=0 && chars!=" "){
         emStr=emStr+chars
        }
     }
     console.log(emStr);

     name='kashinat Is My best friend';
     emCha='';
     for(let i=0; i<=name.length;i++){

         chars = name.charAt(i);
         if(i%2==0 && chars!=" "){
              emCha=emCha+chars;
         }
     }
     console.log(emCha);

console.warn("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

     revStr='Hay Good Morning';
     strRev='';
     for(let i=revStr.length-1; i>=0; i--){
             
         strRev=strRev+revStr.charAt(i);
         if(i!=' '){
         }
     }
     console.log(strRev);

     console.warn('*********************************');

     string= 'I am Learning JavaScript';

     for(let i=0; i<=string.length; i++){
         
           aChars= string.charAt(i);
           if(aChars==='a'){
              console.log(aChars);
           }
     }

     console.warn('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
     // WAP to just log the vowels from the given string ; a e i o u, A E  I O U 

      str5='I am Angular Developer';
      var toLower = str5.toLowerCase();
      for(let i=0; i<=toLower.length; i++){
           chars = toLower.charAt(i)
           if(chars=='a' || chars=='e' || chars=='i' || chars=='o'|| chars=='u'){
            console.log(chars);
           }
      }