


var a = 0
var count = 0;
var numbering = 1;
var local = localStorage.getItem("test");
local = JSON.parse(local);
var heading = document.getElementById("question").innerHTML =numbering + ")  "+ local[a].question;
var radio1 = document.getElementById("opt1").value = local[a].option1;
var opt1 = document.getElementById("one").innerHTML = local[a].option1;
var radio2 = document.getElementById("opt2").value = local[a].option2;
var opt2 = document.getElementById("two").innerHTML = local[a].option2;
var radio3 = document.getElementById("opt3").value = local[a].option3;
var opt3 = document.getElementById("three").innerHTML = local[a].option3;
//start function
function next(){
var local = localStorage.getItem("test");
local = JSON.parse(local);
var ans = local[a].answer;
var b = document.getElementsByName("radioBtn");
for(var i = 0; i < b.length; i++){
if(b[i].checked){

if(b[i].value ===ans){       
count = (100/local.length)+count;
console.log(count)
numbering++
}
}
}
var newArray = [];
var userEmail = localStorage.getItem("user");
userEmail = JSON.parse(userEmail);
userEmail = userEmail.email;
if(a < local.length-1){
a++;
var heading = document.getElementById("question").innerHTML = numbering + ")  "+local[a].question;
var radio1 = document.getElementById("opt1").value = local[a].option1;
var radio2 = document.getElementById("opt2").value = local[a].option2;
var radio3 = document.getElementById("opt3").value = local[a].option3;
var opt1 = document.getElementById("one").innerHTML = local[a].option1;
var opt2 = document.getElementById("two").innerHTML = local[a].option2;
var opt3 = document.getElementById("three").innerHTML =local[a].option3;
}
else{
if(count > 70){
document.getElementById("toper").style.display="none"
document.getElementById("show").innerHTML="congratulations you are passed";
document.getElementById("result1").innerHTML="score:" + count + "%";
var obj = {
email:userEmail,
count:"score:" + count + "%",
welcome:"You got",
}
newArray.push(obj);
console.log(newArray)   
}
else{
document.getElementById("toper").style.display="none"
document.getElementById("show2").innerHTML="sorry you have need of improvement";
document.getElementById("result2").innerHTML="score:  " +count+ "%";
var obj = {
    email:userEmail,
    count:count + "%",
    welcome:"you got",
}
newArray.push(obj);
console.log(newArray)
}
}
var result=localStorage.setItem("result", JSON.stringify(newArray));
}



// }
// }
