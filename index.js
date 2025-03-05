let message = document.getElementById("message");

function validatePassword() {
	let input = document.getElementById("password").value;
	let errors = [];

	if ( input.length < 8 ) {
		errors.push("Password must be at least 8 characters long");
	}
	if ( !/[a-z]/.test(input) ) {
		errors.push("Password must contain at least one lowercase letter");
	}
	if ( !/[A-Z]/.test(input) ) {
		errors.push("Password must contain at least one uppercase letter");
	}
	if ( !/\d/.test(input) ) {
		errors.push("Password must contain at least one number");
	}
	if ( !/[\W_]/.test(input) ) {
		errors.push("Password must contain at least one special character (@, $, %, etc.)");
	}

	if ( errors.length > 0 ) {
		message.innerHTML = errors.join("<br>");
		message.style.color = "red";
	} else {
		message.textContent = "Strong password";
		message.style.color = "green";
	}

	if ( input.includes(" ") ) {
		alert("Spaces are not allowed⚠️");
	}

}

let button = document.getElementById("button-password");
button.addEventListener("click", validatePassword);

let input2 = document.getElementById("password");
let password = document.getElementById("toggle-password");
password.addEventListener("click", showPassword)

function showPassword() {
	if (input2.type === "password") {
		input2.type = "text";
	} else {
		input2.type = "password";
	}
}

