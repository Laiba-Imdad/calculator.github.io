let buttons = document.querySelectorAll('button');
let screen = document.getElementById('screen');
for (eachButton of buttons) {
    eachButton.addEventListener('click', function (e) {
        let buttonText = e.target.innerHTML;
        if (buttonText !== "=") {
            if (buttonText === "÷") {
                buttonText = "/";
            }
            if (buttonText === "×") {
                buttonText = "*";
            }
            screen.value += buttonText;
        }
        if (buttonText === "√") {
            let num = parseFloat(screen.value);
            screen.value = Math.sqrt(num);
        }
        if (buttonText === "C") {
            screen.value = "";
        }
        if(buttonText==="%")
        {
            let numb=parseFloat(screen.value);
            screen.value=numb/100;
        }
        if (buttonText === "=") {
            let screenValue = eval(screen.value);
            screen.value = screenValue;
        }
    });
}
