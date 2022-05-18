var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Event Delegation
//If you click on the list item, it toggles the .done class on and off.
 ul.addEventListener("click", (e) => {
	if(e.target.nodeName === "LI") {
		e.target.classList.toggle("done");
	} if (e.target.nodeName === "BUTTON") {
		e.target.parentElement.remove();
	}
})

//Add buttons next to each list item to delete the item
li.forEach((list) => {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	list.appendChild(btn);
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
