const myCheckedbox = document.getElementById("myCheckedbox");
const myVisa = document.getElementById("myVisa");
const myMasterCard = document.getElementById("myMasterCard");
const myRupey = document.getElementById("myRupey");
const mySubmit = document.getElementById("mySubmit");
const myp1 = document.getElementById("myp1");
const myp2 = document.getElementById("myp2");

mySubmit.onclick = function () {
	if (myCheckedbox.checked) {
		myp1.textContent = "You are Subscibed!!";
	} else {
		myp1.textContent = "You are not Subscribed!!";
	}

	if (myVisa.checked) {
		myp2.textContent = "You are using Visa Card!! ";
	} else if (myMasterCard.checked) {
		myp2.textContent = "You are using MasterCard!! ";
	} else if (myRupey.checked) {
		myp2.textContent = "You are using Rupey Card!! ";
	} else {
		myp2.textContent = "You are not using any Card!!";
	}
};
