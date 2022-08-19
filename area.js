const input = document.querySelectorAll(".triaInput");
const button = document.querySelector("#areaBtn");
const output = document.querySelector("#outputText");
const error = document.querySelector("#errorText");

function Triangle(){
    error.innerText = "";
    output.innerText="";
    const area = CalculateArea(input[0].value,input[1].value);
    console.info(area);
    if(input[0].value && input[1].value){
        if(input[0].value != 0 && input[1].value != 0){
        output.innerText = "The area of triangle is "+area+" cm²";
        }
        else{
        error.innerText = "Base/Height can't be 0";   
        }
    }
    else{
    error.innerText = "Please fill all the details";
    }
}

function CalculateArea(base,height){
    const area = (1/2)*base*height;
    return area
}

button.addEventListener("click", Triangle);