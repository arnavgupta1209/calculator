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

/* declaring variables */
let display_value = "";

/* selecting queries */
const display = document.querySelector(".display");
/*const numdivlist = document.querySelectorAll(".num");*/
const numdivlist = Array.from(document.querySelectorAll(".num"));
console.log(numdivlist);








for (let i = 0; i < numdivlist.length; i++) {
    numdivlist[i].addEventListener("click", () => {
        if (i != 9) {
            alert(i+1);
        } else if (i == 9) {
            alert(0);
        }
    });
}