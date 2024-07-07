
 const textResult = document.getElementById("textResult");
     const imgResult = document.getElementById("imgResult");

const button = document.getElementById("myButton");
button.onclick = function () {
    const input1 = document.getElementById("myInput").value;
    const values = [];
    const imgs = [];

    if (input1 == "") {
        textResult.textContent = `Plz!! Enter a Number First!!`;
    }else{
    for (let i = 0; i < input1; i++){
    const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        imgs.push(`<img src="img/dice-six-faces-${value}.png" width="90px" alt="${value}">`)
    }
    textResult.textContent = `Random Dice: ${values.join(", ")}`;
        imgResult.innerHTML = `${imgs.join(" ")}`
    }
}

