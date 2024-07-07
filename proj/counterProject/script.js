let count = 0;
const dBtn = document.querySelector('.decreaseBtn');
const rBtn = document.querySelector('.resetBtn');
const iBtn = document.querySelector('.increaseBtn');
const countLable = document.querySelector('#countLabel');

iBtn.onclick = function () {
    counter = count++;
    countLable.innerHTML = counter;
}

dBtn.onclick = function () {
    counter = count--;
    countLable.innerHTML = counter;
}

rBtn.onclick = function () {
    counter = 0;
    countLable.innerHTML = counter;
}