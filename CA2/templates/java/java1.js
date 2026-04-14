function cool() {
     let newnum=document.getElementById("tele").value ||"";
     let phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
     if (phonePattern.test(newnum)) {
          localStorage.setItem("tele", newnum);
     document.getElementById("number").innerHTML=`Phone Number: ${newnum}`;
     }else {
        document.getElementById("number").innerHTML=`Invalid phone number, must follow the format.`
     }
    

}
function fav() {
    let newfav=document.querySelector('input[name="fav_job"]:checked').value;
     localStorage.setItem("job", newfav);
     document.getElementById("current").innerHTML=`Current Preference: ${newfav}`;

}
function DOB() {
    let birth=document.getElementById("Birthday").value;
    let formatbirth = new Date(birth).toLocaleDateString("en-GB")
    localStorage.setItem("Birthday", formatbirth);
    document.getElementById("newborn").innerHTML=`Date of Birth: ${formatbirth}`;
}

let uname=localStorage.getItem("username") ||"";
let text="<b>Username:</b>";
document.getElementById("user").innerHTML=`${text} ${uname}`;

let pssword=localStorage.getItem("password")||"";
let text5="<b>Password:</b>"
document.getElementById("pw").innerHTML=`${text5} ${pssword}`;

let newbirth=localStorage.getItem("Birthday")|| "";
let text2="<b>Date of Birth:</b>"
document.getElementById("newborn").innerHTML=`${text2} ${newbirth}`;

let telenum=localStorage.getItem("tele")|| "";
let text3="<b>Phone Number:</b>"
document.getElementById("number").innerHTML=`${text3} ${telenum}`;

let preference=localStorage.getItem("job")||"";
let text4="<b>Current Career Preference:</b>"
document.getElementById("current").innerHTML=`${text4} ${preference}`




