/*White space doese not have effect on thejs
but for readablity space is apropriat js is squancial proccess*/
var x,y,z;
x=5;
y=4;
z=x+y;
document.getElementById("Demo").innerHTML="the value of z is= "+ z + "";
document.getElementById("Demo").innerHTML="The line brea in java script \
            always must be inside the cotatio mark unless it is mistake";
           
            // concatination in java script and display in js
var Name="Addisu ", Address=" AA ",year=20;
var Name2= "Addisu " + " Melese "+ 20;
document.writeln("<br>" + Name + Address + year);
document.writeln(Name2);
/*Data type for Java Script
         string expressed by ""
         number float integer etc
         boolean true or false
         array= collection
         object= Atribute and vale
         null
         undefind
         Data type for js is dynamic eg x=3 x="aaa"*/
         document.writeln("<br>"+"## Escapping the \"symbol\"");
//number in js
document.writeln("<br>" + typeof "add" + "<br>" +
                        typeof 3 + "<br>" +
                        typeof 3.5 + "<br>" +
                        typeof ["a","b","c"] + "<br>" +
                        typeof {fname:"Addisu", mname:"Melese", lname: "Hailu", age: "20"} +  "<br>" +
                        typeof true + "<br>" +
                        typeof y + "<br>" +
                        typeof function myfunction(){} + "<br>" +
                         typeof null + "<br>" );
var a= 2e5;
var b= 2e-5;
var c= 2;
document.writeln("<br>## Number expression<br>"+ "a="+ a +"<br>"+ "b="+ b +"<br>"+ "c="+ c +"<br>");
// Boolean in js
document.writeln("<br>## Boolean expression<br>"+ (a==b) + "<br>"+ (c==c)+ "<br>");
//array in js expressed by square bracket [] consists only value special types of object
var stud= ["a","b","c"];//3 elements
document.writeln("## Array expression <br>Array=[" + stud[0] +", " + stud[1]+ ", "+ stud[2]+ "]");
//object expression in js by curle brace {}  attribute with value (Property)
var person = {fname:"Addisu", mname:"Melese", lname: "Hailu", age: "20",
             Name:function(){
                 return this.fname + " " + this.mname;
             }};
document.writeln("<br>## Object person expression in js <br>"+ person["fname"] + " "+ person.mname + " " + 
person["lname"] + " "+ person["age"] + "<br> ##With barce " + person.Name() + "<br>## Without brace " + person.Name);

//undefind and null data type
var d; //this is undefind 
var p=null; //empty the p variabel
//type of operator used to know the data types  
var d; //this is undefind 
var p=null; //empty the p variabel
//type of operator used to know or return the data types 
//string length of the paragraph
var stl="shadiusabcvc";
document.writeln("<br> String length of 'hadiusabcvc' = " + stl.length);
/*for searching porpose of the word from the paragraph we can use index
 string_name.indexof("word", Search starting) to search the first word
 string_name.lastindexof("word", Search starting) to search the last word
*/
var dd="Addisu melese hailu mekuria melese tesema";
document.writeln("<br>## First index=" + dd.indexOf("mele",0));
document.writeln("<br>## Search=" + dd.search("mele"));
document.writeln("<br>## Last index=" + dd.lastIndexOf("mele"));
document.writeln("<br>## index is not present=" + dd.indexOf("mele", 40));
//Date object
document.writeln("<br>## Date object " + new Date());
document.writeln("<br>## year and month only other are zero " + new Date(2021, 11));
document.writeln("<br>## Seconed other are defualt " + new Date(2021));//from this 2021 is second not year 2021~ 2 seconed
//set and get day
var d= new Date();
var days=["Sunday", "Monday", "Tusday", "Wendsday", "Thursday", "Friday", "Saturday"];
var months=["January", "February", "March", "April", "May", "Jun","July", "Augest", "Septamber", "October", "Novembder", "December"];
document.writeln("<br>" + months[d.getMonth()]   + "/"+  days[d.getDay()]+  "/" + d.getFullYear());
d.setFullYear(2020);
d.setMonth(3);
document.writeln("<br>" + d );
//maths method
document.writeln("<br>4.7 rounds to =" + Math.round(4.7));
document.writeln("<br>4.4 rounds to =" + Math.round(4.4));
document.writeln("<br> 2 powers of 3 =" + Math.pow(2, 3));
document.writeln("<br> Squar roots of 64 =" + Math.sqrt(64));
document.writeln("<br> Squar roots of 6 =" + Math.sqrt(6));
document.writeln("<br> Squar roots of 6 rounds to  =" + Math.round(Math.sqrt(6)));
document.writeln("<br>" + Math.ceil(4,4));
document.writeln("<br>" + Math.floor(4.4));
document.writeln("<br>" + Math.abs(-3));
document.writeln("<br>" + Math.sin(90));//in rad
document.writeln("<br>" + Math.min(200, 0,90));
document.writeln("<br> PI=" + Math.PI);
document.writeln("<br>asin(1)=" + Math.asin(1));
document.writeln("<br> Natural lograizm bas 2" + Math.LN2);
//Maths Random
document.writeln("<br> Random number between 0 and 9=" + Math.floor(Math.random()* 10));// Displays from 0 to 9
document.writeln("<br>Random number between 1 and 10=" + (Math.floor(Math.random()* 10)+1));// returns a number between 1 and 10
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max- min)) + min;
}
function getRndInteger2(min, max){
    return Math.floor(Math.random() * (max- min +1)) + min;
}
document.writeln("<br>Random Function =" + getRndInteger(4, 10));
document.writeln("<br>Random Function =" + getRndInteger2(4, 10));
//Conditional programming
if(new Date().getHours<10){
 document.writeln("<br>Good day");
}
else {
    document.writeln("<br>Not good day");
}
var day;
switch(new Date().getDay()){
    case 1:
        day="m";
        break;
    case 2:
        day="tu";
        break; 
    case 3:
        day="w";
    default:
        day="Look it";    
              
}
document.writeln("<br>" + day);
//Array length
document.writeln("<br> Array length=" + months.length);
// for loop
var months=["January", "February", "March", "April", "May", "Jun","July", "Augest", "Septamber", "October", "Novembder", "December"];
var person = {fname:"Addisu", mname:"Melese", lname: "Hailu", age: "20"}
var x;
var text= " ";
for ( x in person){
  text += person[x] + " ";
}
var month= " ";
var x;
document.writeln("<br>" + text);
for (x=0; x<months.length; x++){
    month += months[x] + ", ";
}
document.writeln("<br> for loop=" + month);
var monthh= " ";
var x=0;
while (x < months.length){
    
    if(months[x]==="Septamber"){
        break;}
        //if(months[x]==="March"){ continue;}

    monthh += months[x] + ", ";
    x++
}
document.writeln("<br> while loop=" + monthh);
var monthhh= " ";
var x=0;
do{ 
    monthhh += months[x] + ", ";
    x++
}
while (x < months.length){
    
}
document.writeln("<br> do while loop=" + monthhh);
//  Regular expression
var string= "Addisu melese addisu hailue melese    addisu mekuria";
var n1= string.search(/addisu/i);
var n2= string.search(/addisu/g);
var n3= string.search(/addisu/m);
document.writeln("<br> search/i=" + n1 + " search/g="  + n2 + "  search/m=" + n3);
/* /i  perform case insensetive 
   /g globale  find all matches rather than stopping the firdt
   /m perform multiple matching lines
   _________________brackets_________________
   [abc] finds any characters in the brackets
   [0-9] find any characters between 0 and 9
   (x|y) find x or y character 
   ____________metacharacters______________
   \d find a digit
   \s find a white space character
   \b find a match at bigning or the end of the word
   \uxxxx find the unicode character specified by hexadecimal number xxxx
   amharic is not in asci code it is in unicode
   _________________quantifiers__________________
    n+  matches any string that contains at least one n >=n
    n*  >>                         >>    zero or more occurance of n
    n?  >>                         >>    zero or one occurance of n
    ________________test____________
    

*/ 
//string replace

function Replace(){ 
var replace= string.replace(/addisu/i, "Zemenu");//replacing
document.writeln("<br> replace=" + replace);
}
// test the presence of e in striing
document.writeln("<br> test=" +/f/.test(string));// test presence if f in string
console.log("ADD");
 


