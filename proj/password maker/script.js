
let myButton = document.querySelector("#myButton");
myButton.onclick = function () {
    let myInput = document.querySelector(".myInput").value;
    let Number = true;
    let Symbol = true;
    let Alphabate = true;
    
    myInput == ''?  document.querySelector(".result").innerHTML = "Please!! Enter any Number First!!": document.querySelector(".result").innerHTML = "Copy Your Password => " + password(myInput, Number, Symbol, Alphabate);
}

function password(myInput, Number, Symbol, Alphabate) {
    let Num = "1234567890";
    let Sym = "!@#$%^&*()_+";
    let Alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arr = '';
    let pass = '';
    
    arr += Number ? Num : "";
    arr += Symbol ? Sym : "";
    arr += Alphabate ? Alpha : "";

    for (let i = 0; i < myInput; i++){
        let random = Math.floor(Math.random() * arr.length);
        pass += arr[random];
    }
    return pass;
}

