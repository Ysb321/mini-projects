let max = 6;
let min = 1;
let randomNum;
let rollBtn = document.getElementById('rollBtn');
let label1 = document.querySelector('.label1');


rollBtn.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum;
}



