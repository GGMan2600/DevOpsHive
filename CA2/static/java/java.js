var oneimage=document.getElementById("img1");
oneimage.style.border="3px solid black";
oneimage.style.borderRadius="8%";

 var twoimage=document.getElementById("img2");
 twoimage.style.border="3px solid black";
 twoimage.style.borderRadius="8%";

 var threeimage=document.getElementById("img3");
 threeimage.style.border="3px solid black";
 threeimage.style.borderRadius="8%";

function newsubmit() {
    localStorage.setItem("username",document.getElementById("username").value);
    localStorage.setItem("password",document.getElementById("password").value);
}

let usr=localStorage.getItem("username");
document.getElementById("demo").innerHTML=`Welcome back, ${usr}!`;
document.getElementById("password").innerHTML = localStorage.getItem("password");

function showpw() {
    var checkpwd=document.getElementById("password");
    if (checkpwd.type==="password") {
        checkpwd.type="text";
    } else {
        checkpwd.type="password";
    }
 }
