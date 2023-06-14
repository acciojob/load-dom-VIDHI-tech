//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	// Select the body element
	var body = document.querySelector("body");

	// Clear any existing content inside the body
	body.innerHTML = "";

	// Create a text node with the string "DOM load success"
	var textNode = document.createTextNode("DOM load success");

	// Append the text node to the body
	body.appendChild(textNode);
});