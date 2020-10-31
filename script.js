//cache selectors
var button = document.getElementById("enterItem");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");

//event listener
ul.addEventListener("click", toggleDone);
ul.addEventListener("click", deleteLi);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

//functions
function deleteLi () {
	if (event.target.tagName === "BUTTON") {
		event.target.parentNode.remove();
		//li.remove();
	}
}

function toggleDone () {
	if (event.target.tagName === "LI"){
	event.target.classList.toggle("done");
	//console.log(event.target);
	}
}

function addListEl (){
	var li = document.createElement("li");
	li.className="li";
	li.appendChild(document.createTextNode(input.value+" "));
	ul.appendChild(li)
	input.value = "";
	addDelBtn(li);
}

function addDelBtn (li){
	var btn = document.createElement("button");
	btn.className="del";
	btn.appendChild(document.createTextNode("delete"));
	li.appendChild(btn);
}

function inputLength(){
	return input.value.length;
}

function addListAfterClick(){
	if (inputLength()>0){
	addListEl();
	} else return;
}

function addListAfterKeypress(event){
	if (inputLength()>0 && event.keyCode ===13){
		addListEl();
	}
}

// playiung with innerHTML !!dangerous!! not recommended to use
document.getElementById("clicker").onclick = function(){
document.getElementById("status").innerHTML = "nice job!";
}
document.getElementById("status").onclick = function(){
document.getElementById("status").innerHTML = "";
}

