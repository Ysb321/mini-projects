

let myInput = document.getElementById("myInput");
let toCel = document.getElementById("toCelsius");
let toFar = document.getElementById("toFaherenheit");
let myButton = document.getElementById("myButton");
let result = document.getElementById("result");
let temp;

myButton.onclick = function () {
     if (myInput.value == '') {
         result.textContent = "Please Enter any number first!!"
     } else if (toFar.checked) {
         temp = myInput.value;
         temp = ((temp * 9 / 5) + 32 )
         result.textContent =  temp.toFixed(1) + "°F"; //toFixed extra number after decimal,
    } else if (toCel.checked) {
         temp = myInput.value;
         temp = ((5 / 9 * (temp - 32)));
         result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "please check above options!!"
     }
}