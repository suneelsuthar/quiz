var username = localStorage.getItem("user");
username =JSON.parse(username).email;
username=username.slice(0,-10)
// console.log(username);
document.getElementById("user2").innerHTML=username;
var arr = []
function save(){
var question=document.getElementById("question").value;
var option1=document.getElementById("opt1").value;
var option2=document.getElementById("opt2").value;
var option3= document.getElementById("opt3").value;
var answer= document.getElementById("answer").value;

if(answer === "A"){
answer = option1
}
else if(answer === "B"){
answer = option2
}
else if(answer === "C"){
answer === option3
}
 
function Test(question, option1, option2, option3,answer){
this.question = question;
this.option1 = option1;
this.option2 = option2;
this.option3 = option3;
this.answer = answer;
}

var newQue = new Test(question,option1,option2,option3,answer);
arr.push(newQue);
console.log(arr);
document.getElementById("question").value = "";
document.getElementById("opt1").value = "";
document.getElementById("opt2").value = "";
document.getElementById("opt3").value= "";
document.getElementById("answer").value= "";
}
function add(){
if(arr === null){
arr = []
}
else{
arr = JSON.stringify(arr)
var q = localStorage.setItem("test" , arr);
}
}




