/* declaring variables */
let display_value = "";

/* selecting queries */
const deletebutton = document.querySelector("#delete");
const plusbutton = document.querySelector("#plus");
const minusbutton = document.querySelector("#minus");
const asterbutton = document.querySelector("#aster");
const slashbutton = document.querySelector("#slash");
const equalbutton = document.querySelector("#equals");
const clearbutton = document.querySelector("#clear");
const display = document.querySelector(".display");
/*const numdivlist = document.querySelectorAll(".num");*/
const numdivlist = Array.from(document.querySelectorAll(".num"));
console.log(numdivlist);



/* calculation functions */
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, op) {
    switch (op) {
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
    }
}


function getopindex() {
    let oplist = ["+", "-", "*", "/"];
    for (let i = 0; i < display_value.length; i++) { 
        if (oplist.includes(display_value.slice(i,i+1))) {
            return i;
        }
    }
}

function updateDisplay() {
    display.textContent = display_value;
}

function clearDisplay() {
    display_value = "";
    updateDisplay()
}

function equalto() {
    let first = "";
    let second = "";
    let op = "";
    let opindex = getopindex();
    first = display_value.slice(0,opindex)
    second = display_value.slice(opindex+1, display_value.length)
    op = display_value.slice(opindex,opindex+1);
    let result = operate(+first, +second, op);
    display_value = String(result);
    updateDisplay() 
}








equalbutton.addEventListener("click", () => {
    equalto();
})

clearbutton.addEventListener("click", () => {
    display_value = "";
    updateDisplay();
})

for (let i = 0; i < numdivlist.length; i++) {
    numdivlist[i].addEventListener("click", () => {
        if (i != 9) {
            display_value = display_value + String(i+1);
            updateDisplay();
        } else if (i == 9) {
            display_value = display_value + "0";
            updateDisplay();
        }
    });
}

deletebutton.addEventListener("click", () => {
    display_value = display_value.slice(0, display_value.length-1);
    updateDisplay();
})

plusbutton.addEventListener("click", () => {
    if (getopindex()) {
        equalto();
    }
    display_value = display_value + "+"
    updateDisplay();
})

minusbutton.addEventListener("click", () => {
    if (getopindex()) {
        equalto();
    }
    display_value = display_value + "-"
    updateDisplay();
})

asterbutton.addEventListener("click", () => {
    if (getopindex()) {
        equalto();
    }
    display_value = display_value + "*"
    updateDisplay();
})

slashbutton.addEventListener("click", () => {
    if (getopindex()) {
        equalto();
    }
    display_value = display_value + "/"
    updateDisplay();
})