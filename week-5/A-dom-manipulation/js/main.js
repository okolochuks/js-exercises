var button = document.querySelector("#bgrChangeBtn");

button.addEventListener("click", function() {
  var changeColor = document.querySelector(".jumbotron");
  changeColor.style.backgroundColor = "blue";
});

var alertBtn = document.querySelector("#AlertBtn");
alertBtn.addEventListener("click", function() {
  alert(" learning javascript to be a programmer");
});

var myButton = document.querySelector("#clickMe");
myButton.addEventListener("click", function() {
  var container = document.querySelector("#box");
  var newParagraph = document.createElement("p");
  newParagraph.innerText = "Look AT THIS!!";
  newParagraph.style.backgroundColor = "blue";
  newParagraph.id = "mypara";
  container.appendChild(newParagraph);
});
