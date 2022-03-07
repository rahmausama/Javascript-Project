/**********************show information about user login************************/
var userInfo=localStorage.register;
var info=userInfo.split("|");
var userName=document.getElementById("user-name");
var email=document.getElementById("email");
var mobile=document.getElementById("mobile");
var gender=document.getElementById("gender");
userName.innerHTML=info[2];
email.innerHTML=info[0];
mobile.innerHTML=info[3];
gender.innerHTML=info[4];