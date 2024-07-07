let age;
let ageInput = document.getElementById("myInput");
let ageSubmit = document.getElementById("myButton");
let result = document.getElementById("myResult");

ageSubmit.onclick = function () {
	age = ageInput.value;
	if (age >= 100) {
		result.textContent = "Your too old for this Site!!";
	} else if (age == 0) {
		result.textContent = "Your just born!!";
	} else if (age <= 0) {
		result.textContent = "Your age is not valid for this Site!!";
	} else if (age >= 18) {
		result.textContent = "Your age is enough for this Site!!";
	} else {
		result.textContent = "Your are is not enough for this Site!!";
	}
};
