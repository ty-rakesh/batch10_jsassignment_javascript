//find length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);
//find index
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos)
//last index

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos)
//search
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos)
//substring
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res)
//replace
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n)
//upper
var text1 = "Welcome to Technoelevate";       // String
var text2 = text1.toUpperCase(); 
console.log(text2)
//lower
var text1 = "Welcome to Technoelevate";       // String
var text2 = text1.toLowerCase(); 

console.log(text2)

//charater
var str = "Welcome to Technoelevate";
var ch=str.charAt(0);  

console.log(ch);

//character code at
var str = "Welcome to Technoelevate";

var nu=str.charCodeAt(0);  
console.log(nu);
