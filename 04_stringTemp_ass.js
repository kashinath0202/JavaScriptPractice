
var  wordLengthSquare = function(str_1){

    var str_1Length =  str_1.length;
    console.log(str_1Length);

    return str_1Length * str_1Length
}
var result = wordLengthSquare("JavaScript")
console.log(result);




var wordLengthSquare_2 = function(str_2)  {

    var strLe = str_2.length;
    console.log(strLe);

    return strLe * strLe
}
 var fResult = wordLengthSquare_2("Google");
 console.log(fResult);
 var f_2Result = wordLengthSquare_2("MicroSoft");
 console.log(f_2Result);


 var str = function(val){

     console.log(val.split(' ').reverse()); 
     console.log(`${val.split('').reverse()}`);
     var strLength = val.length;
     var strWords = val.split(" ");
     var strSpiltLength =strWords.length;
     console.log(strLength/strSpiltLength);
     console.log(strLength*strSpiltLength);
 }
  var res = str("“I am Angular Developer”")
//   console.log(res);