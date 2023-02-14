let inputa = document.getElementById("k");
let inputb = document.getElementById("kk");
let result = document.getElementById("kkk");
let sumbutton = document.getElementById("+");
let minbutton = document.getElementById("-");
let pobutton = document.getElementById("*");
let delbutton = document.getElementById("/");
sumbutton.onclick = function() {
a = Number(inputa.value);
b = Number(inputb.value);
let c = a + b;
result.innerText = c;
}
minbutton.onclick = function() {
a = Number(inputa.value);
b = Number(inputb.value);
let c = a - b;
result.innerText = c;
}
pobutton.onclick = function() {
a = Number(inputa.value);
b = Number(inputb.value);
let c = a * b;
result.innerText = c;
}
delbutton.onclick = function() {
a = Number(inputa.value);
b = Number(inputb.value);
let c = a / b;
result.innerText = c;
}