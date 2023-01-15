var str = "    Hey you are doing good, keep it up     ";

var printStr = function(){
    console.log(str);
}
printStr();

var strLength = function(){
    console.log(str.length);
    var strTrim = str.trim()
    console.log(str.trim());
    console.log(strTrim.length);
    console.log(strTrim.charAt(0),strTrim.charAt(strTrim.length-1));
    var strSpilt = strTrim.split(" ")
    console.log(strSpilt.length);
    console.log(strTrim.indexOf('good'));
    console.log(strTrim.substring(23));
    console.log(strTrim.endsWith('up'));
    console.log(strTrim.startsWith('Hey'));


}
strLength();