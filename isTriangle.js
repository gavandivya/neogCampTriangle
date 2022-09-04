const input = document.querySelectorAll(".triaInput");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");
const error = document.querySelector("#errorText");

function isTriangle() {
    error.innerText = " ";
    output.innerText = " ";
    console.info(input[0].value);
    const sum = Sum(Number(input[0].value), Number(input[1].value), Number(input[2].value));
    if (input[0].value && input[1].value && input[2].value) {
        if (input[0].value >= 0 && input[1].value >= 0 && input[2].value >= 0) {
            if (sum === 180) {
                output.innerText = "Ohh its a TRIANGLE";
            }
            else {
                output.innerText = "So sad, its a NOT A TRIANGLE";
            }
        }
        else {
            error.innerText = "Angle can't be less than or equal to 0°";
        }
    }
    else {
        error.innerText = "Please fill all the angles";
    }
}

function Sum(a1, a2, a3) {
    const sum = a1 + a2 + a3;
    return sum
}

button.addEventListener("click", isTriangle);