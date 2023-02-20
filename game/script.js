let canvas = document.getElementById("cangame");
let context = canvas.getContext("2d");
let result = document.getElementById("k");
let first = document.getElementById("kk");

let button = document.getElementById("+");
let nx = 6;
let ny = 5;
let sqside = 50
let herox = 0;
let heroy = 0;
let heroimg = new Image();
heroimg.src = "hero.png";
canvas.height = ny * sqside;
canvas.weight = nx * sqside;
context.font = "35px Arial";

let letter = 0;
const cars = ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X","Y", "Z"];
const words = ["forward","language","gesture","cat","fish","country","dog"];

let f = Math.floor(Math.random() * words.length);
const tel = [];
let k =words[f].charAt(0); 
let l =words[f].charAt(words[f].length-1); 
result.innerText = words[f];
for(let m = 0;m < words[f].length; m++){
tel.push(words[f].charAt(m));

}
let lenght = "_ ";
for(let hg = 0;hg < words[f].length -3;hg++){

lenght = lenght.concat("_ ");

}

first.innerText = tel[0]  + lenght  + tel[words[f].length-1];
//var tel2 = tel[0]  + lenght  + tel[words[f].length-1];

function drawMap() {
if(letter > 25){
letter = 0;

           }

context.clearRect(0, 0,canvas.width,  canvas.height);
context.drawImage(heroimg,herox* sqside,heroy * sqside,sqside,sqside);
for (let i = 0;i < nx; i++){
    for(let j = 0;j < ny; j++){
context.strokeRect(i * sqside, j * sqside, sqside, sqside);

context.fillText(cars[letter],i * sqside, (j+1) * sqside);
letter++;
console.log(herox,heroy);

       }
   }
}



context.drawImage(heroimg,herox* sqside,heroy * sqside,sqside,sqside);

drawMap ();
canvas.onclick = function(e) {
let x = e.x - canvas.offsetLeft;
let y = e.y - canvas.offsetTop;
herox = Math.floor(x/sqside);
heroy = Math.floor(y/sqside);
drawMap();

}


button.onclick = function() {
var tel2 = [];
tel2[0] = tel[0];
tel2[words[f].length-1] = tel[words[f].length-1];
for(let kkk = 0;kkk < words[f].length-2;kkk++){
tel2[kkk+1]=lenght.charAt(kkk);
} 
let bukva = cars[5*herox + heroy];
bukva = bukva.toLowerCase();
for(let kl = 1;kl < words[f].length-1;kl++){
if(bukva == tel[kl]){
tel2[kl]=tel[kl];

first.innerText = tel2;

}
}
}
