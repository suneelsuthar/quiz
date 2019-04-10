function logout(){
var getuser = localStorage.getItem("user");
getuser = JSON.parse(getuser);
getuser = localStorage.removeItem(getuser);
localStorage.setItem("user" , JSON.stringify(getuser));
window.location.reload();
}
function popup(){
    window.open("index.html", "", "width=360,height=400,left=1024px,top=100")
}


