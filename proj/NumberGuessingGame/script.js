// const maxNum = 100;
// const minNum = 50;

// const answer = Math.floor(Math.random() * (maxNum - minNum) + minNum);

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
// 	let guess = window.prompt(`Enter a Number between ${minNum} - ${maxNum}`);
// 	guess = Number(guess);
// 	if (guess > 100 || guess < 50) {
// 		alert(`plz!! Enter a Number between ${minNum} - ${maxNum}`);
// 	} else if (isNaN(guess)) {
// 		// isNaN means is Not a Number
// 		alert(`plz!! Enter a Number between ${minNum} - ${maxNum}`);
// 	} else {
// 		attempts++;
// 		if (guess > answer) {
// 			alert("Number is too High!!");
// 		} else if (guess < answer) {
// 			alert("Number is too Low!!");
// 		} else {
// 			alert(
// 				`Congrats ${answer} a right answer and your attempts are ${attempts}!!`,
// 			);
// 			running = false;
// 		}
// 	}
// }

var maxNum;
var minNum;
let result1 = document.querySelector("#myH2");
let answer;

document.querySelector("#setn").onclick = function () {
	maxNum = document.querySelector(".maxNum").value;
	minNum = document.querySelector(".minNum").value;
	maxNum = Number(maxNum);
	minNum = Number(minNum);
	if (minNum > maxNum) {
		result1.textContent = `${minNum} is greater than ${maxNum}, can't set value!!`;
	} else if (maxNum == "" && minNum == "") {
		result.textContent = `Please Set Numbers First!!`;
	} else {
		console.log(maxNum);
		console.log(minNum);
		result1.textContent = `Minimum Value is ${minNum} & Maximum Value is ${maxNum}.`;
		answer = Math.floor(Math.random() * (maxNum - minNum) + minNum);
	}
};

let guess = document.querySelector(".myInput");
let result = document.querySelector("#myH3");
let running = true;
let attempts = 0;

document.querySelector("#submit").onclick = function () {
	if (guess.value > maxNum || guess.value < minNum) {
		result.textContent = `Please Enter Number Between ${minNum} - ${maxNum}.`;
	} else if (guess.value == "") {
		result.textContent = `Please Set Numbers First!!`;
	} else {
		attempts++;
		if (guess.value > answer) {
			result.textContent = "This number is too High!! Try again!";
		} else if (guess.value < answer) {
			result.textContent = "This number is too Low!! Try again!";
		} else {
			result.textContent = `Congrats 🎉🎊!! ${answer} is a correct guess and your attempts are ${attempts}.`;
			running = false;
		}
	}
};

