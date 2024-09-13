console.log("Login-Form");
//var username=document.getElementById("username");
var username=document.querySelector("#username");
var password=document.getElementById("password");
var button=document.querySelector("#submit");

/*var div=document.querySelector("#demo");
div.innerText = "Login Form";
console.log(div);*/

/*password.value="pass1123"*/

console.log(button);
button.addEventListener("click",function(e){
    
    e.preventDefault();



/*
1.username is required
2.password is required
3.password length should be minimum 8 character

Alert:login successfully
*/

if(username.value){
    console.log(username.value)
    
}
else
{
	alertme("username is required","Error");
   // alert("user name is required")
	return;
}
if(password.value)
{
	if((password.value).length<8)
{
	alertme("minimum 8 character","Error")
    //alert("minimum 8 character");
	return;
}
else{
    console.log(password.value);
	alertme("login successfully","info");
	   
}
}
else
{
	alertme("password required","Error")
    //alert("password is required")
    return;
}

/*if(username.value){
    console.log(username.value)
		if(password.value)
		{
			
				if((password.value).length<8)
				{
					alert("minimum 8 character")
				}
				else{
					console.log(password.value)  
				}
		}
			else
			{
				alert("password is required")
    
			}
		}
else
{
    alert("user name is required")
}*/
})

//own alert message
function alertme(message,errtype){
var toastLiveExample=document.getElementById('liveToast');
var Messagebox=document.querySelector(".toast-body");
var errortype=document.querySelector(".me-auto");
Messagebox.innerText=message;
errortype.innerText=errtype;
var toast = new bootstrap.Toast(toastLiveExample);
toast.show();





}