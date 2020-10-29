//it is important to cache selectors in variables
var h1 = document.querySelector("h1");

//selectors
document.getElementByTagName
document.getElementByClassName
document.getElementById
document.getElementById("bobo")

document.querySelector("h1");
document.querySelectorAll("h1");

// element.getAttribute
// element.setAttribute
document.querySelector("li").getAttribute("random")
document.querySelector("li").setAttribute("random","100")
// var el=document.querySelectorAll("li");
// var attr = el.getAttribute("random"); not working???

//changing styles
// style.{property} ok, but not recomended - separation of 
//concerns (dont mix html(text) with css(style))
//document.querySelector("h1").style.background="yellow";

// className classList.add/remove/toggle
var h1 = document.querySelector("h1");
h1.className="coolTitle"+" animate__animated animate__swing";
document.querySelector("li").classList.add("done");

//innerHTML !!dangerous!!
document.getElementById("clicker").onclick = function(){
document.getElementById("status").innerHTML = "nice job!";
}
document.getElementById("status").onclick = function(){
document.getElementById("status").innerHTML = "";
}

//parentElement children
document.querySelectorAll("li")[1].parentElement;
document.querySelector("li").parentElement;

// var database = [
// 	{
// 		username: "andrei",
// 		password: "supersecret"
// 	},
// 	{
// 		username: "sally",
// 		password: "cat"
// 	},
// 	{
// 		username: "bob",
// 		password: "555"
// 	}
// ];

// var newsFeed = [
// 	{
// 		username: "Milo",
// 		timeline: "Nice photo"
// 	},
// 	{
// 		username: "Kate",
// 		timeline: "Look at me"
// 	},
// 	{
// 		username: "Kilan",
// 		timeline: "JS is cool!"
// 	},
// ];

// function isUserValid(user,pass){
// 	for (var i = 0; i < database.length; i++) {
// 		if (user===database[i].username
// 		&&pass===database[i].password) {
// 				return true;
// 		} 
// 	}

// 		return false;
// }

// function signIn(user,pass){
// 		if (isUserValid(user,pass)) {
// 		console.log(newsFeed);
// 		} else {
// 		console.log("Wrong username or password");
// 		}
// }

// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt = prompt("What's your password?");
// signIn(userNamePrompt,passwordPrompt);


// var toDoList =[
// 	"clean room",
// 	"brush teeth",
// 	"ecersise",
// 	"eat healthy"
// ];

// var a=5;

// // var counter=0;
// // while (counter<10){
// // 	console.log(counter);
// // 	counter++;
// // }

// // var counter2=0;
// // do{
// // 	console.log(counter2);
// // 	counter2++;
// // } while (counter2<10);

// // for (var i = 0; i < toDoList.length; i++) {
// // 	toDoList[i]=toDoList[i]="!";
// // }
// // toDoList.forEach(function(it,i,arr){
// // 	arr[i]=arr[i]+"ss";
// // })


// function age3(age){
// if (Number(age) < 18) {
// 	console.log("Sorry, you are too yound to drive this car. Powering off");
// } else {
// 	return 2;
// }
// }

// var userObj= {
// 	name:"Milo",
// 	age:"33",
// 	hobby:["JS","html","CSS"],
// 	isMarried:false,
// 	//shout is a method of user
// 	shout: function(){
// 		console.log("aaa xd");
// 	}
// };
// //user.hobby[2]
// //user.shout()
// var usersList = [
// {
// 	username: "milo",
// 	password: "cycki"
// },
// {
// 	username: "aga",
// 	password: "dupad"
// }
// ];
// //users[1].password


