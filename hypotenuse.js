const input = document.querySelectorAll(".triaInput");
const button = document.querySelector("#hypoBtn");
const output = document.querySelector("#outputText");
const error = document.querySelector("#errorText");
function isHypoTriangle() {
    error.innerText = "";
    output.innerText = "";
    const hypo = CalculateHypo(Number(input[0].value), Number(input[1].value));
    if (input[0].value && input[1].value) {
        if (input[0].value >= 0 && input[1].value >= 0) {
            output.innerText = "The length of hypotenuse is " + hypo + " cm";
        }
        else {
            error.innerText = "Side can't be 0 or less than 0";
        }
    }
    else {
        error.innerText = "Please fill all the Sides";
    }
}

function CalculateHypo(a1, a2) {
    const hypo = Math.sqrt((a1 * a1) + (a2 * a2));
    return hypo
}

button.addEventListener("click", isHypoTriangle);