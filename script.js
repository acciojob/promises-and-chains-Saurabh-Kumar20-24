//your JS code here. If required.
let btn=document.getElementById("btn");
let name=document.getElementById("name");
let age=document.getElementById("age")


btn.addEventListener("click",(e)=>{
	e.preventDefault();
	if(name.value=="" || isNaN(age.value)){
		alert("Please enter valid details")
	}

		let myPromise= new Promise(function(resolve,reject){
			setTimeout(()=>{
				if(age.value>=18){
					resolve("Welcome, . You can vote.")
				}else{
					reject("Oh sorry . You aren't old enough.")
				}
			},4000)
})
myPromise.then((message)=>{
	alert(message)
}).catch((error)=>{
	alert(error)
})
})





