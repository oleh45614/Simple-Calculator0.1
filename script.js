const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));
function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', opersPressed));
function opersPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.cleanall').addEventListener('click', clearResults)
function clearResults() {
    display.value = null;
}

document.querySelector('.backclean').addEventListener('click', clearBack);
function clearBack() {
    display.value = display.value.slice(0, -1);
}

document.querySelector('.eq').addEventListener('click', calculate);
function calculate() {
    let result = eval(display.value);
    display.value = result.toFixed(2);
}
document.querySelector('.poin').addEventListener('click', addPoin);

function addPoin(ev) {
    if (display.value.slice(-1) !== '.') display.value += ev.target.innerText;
}

