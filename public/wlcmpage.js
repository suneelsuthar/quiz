var resultobj = localStorage.getItem("result");
resultobj = JSON.parse(resultobj);
for(var i =0; i < resultobj.length; i++){
    document.getElementById("welcome").innerHTML=resultobj[i].welcome;
    document.getElementById("count").innerHTML=resultobj[i].count;



}
