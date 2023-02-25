let canvas = document.getElementById("cangame");
let context = canvas.getContext("2d");
let can = document.getElementById("can");
let ctx = can.getContext("2d");




let greshka = 0;
let cas = 0;




let res = document.getElementById("kkk");
let result = document.getElementById("k");
let first = document.getElementById("kk");
let button = document.getElementById("+");
let nx = 6;
let ny = 5;
let sqside = 50
can.height = ny* sqside;
can.width = nx* sqside;

let herox ;
let heroy ;
let heroimg = new Image();
heroimg.src = "hero.png";
canvas.height = ny* sqside;
canvas.width = nx* sqside;
context.font = "35px Arial";
let letter = 0;
const cars = ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X","Y", "Z"];
const words = ["forward","language","gesture","cat","fish","country","dog"];
 
let f = Math.floor(Math.random() * words.length);
const tel = [];
let k =words[f].charAt(0); 
let l =words[f].charAt(words[f].length-1); 
result.innerText = words[f];
for(let m = 0;m < words[f].length; m++) {
    tel.push(words[f].charAt(m));
}
 let tel2 = [];
let lenght = [];

for(let hg = 0;hg < words[f].length -2;hg++) {
    lenght[hg] = "_";
    tel2[hg+1] = lenght[hg];
}
tel2[0] = tel[0];
tel2[words[f].length-1] = tel[words[f].length-1];
   
first.innerText = tel2;
//var tel2 = tel[0]  + lenght  + tel[words[f].length-1];
function drawMap() {

    if(letter > 25) {
        letter = 0;
    }
   
    context.clearRect(0, 0,nx* sqside,  ny* sqside);
    context.drawImage(heroimg,herox* sqside,heroy * sqside,sqside,sqside);
    for (let i = 0;i < nx; i++) {
        for(let j = 0;j < ny; j++) {
            context.strokeRect(i * sqside, j * sqside, sqside, sqside);
           
            context.fillText(cars[letter],i * sqside, (j+1) * sqside);
            letter++;
            console.log(herox,heroy);

        }
    }
}

context.drawImage(heroimg,herox* sqside,heroy * sqside,sqside,sqside);

drawMap ();

    //ctx.stroke();



draw ();


canvas.onclick = function(e) {
    let x = e.x - canvas.offsetLeft;
    let y = e.y - canvas.offsetTop;
    herox = Math.floor(x/sqside);
    heroy = Math.floor(y/sqside);
    drawMap();
} 
//let verno = 0;

let kon = [];
button.onclick = function() {      
    var vhod = document.getElementById("vhod");     
    if(vhod.value == words[f]) {
        for(let i = 0;i < words[f].length;i++){
            kon[i] = words[f].charAt(i);
        }
     first.innerText = kon;
     vhod.disabled = true;
     }
     else {
         vhod.value = "";
         greshka = 0;
         let bukva = cars[5*herox + heroy];
         bukva = bukva.toLowerCase();
         for(let kl = 1;kl < words[f].length-1;kl++) {
             if(bukva == tel[kl]) {
                 tel2[kl]=tel[kl];
                 first.innerText = tel2;  
                  
              }
              else {
                  greshka++;
                  if(greshka == words[f].length-2) {
                  cas++;
                  res.innerText = cas + " mistake";
               }
         }
     }
     draw() ;
    }
}
function draw() {
   // ctx.beginPath();
    switch(cas){

    case 1: 
            ctx.beginPath();
            ctx.moveTo(25,0);
            ctx.lineTo(25, 250); 
            ctx.stroke(); 
            break;

    case 2: 
ctx.beginPath();
            ctx.moveTo(25,1);
            ctx.lineTo(275, 1);
            ctx.stroke();
            break;
    case 3: 
ctx.beginPath();
            ctx.moveTo(275,1);
            ctx.lineTo(275, 250);
            ctx.stroke();
            break;
    case  4: 
ctx.beginPath();
             ctx.moveTo(150,1);
             ctx.lineTo(150, 50);
             ctx.stroke();
             break;
    case 5: 
ctx.beginPath();
            ctx.arc(150, 80, 30, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
    case 6: 
ctx.beginPath();
            ctx.moveTo(150,110);
            ctx.lineTo(150, 175);
            ctx.stroke();
            break;

    case 7: 
ctx.beginPath();
            ctx.moveTo(150,175);
            ctx.lineTo(100, 250);
            ctx.stroke();
             break;
    case 8: 
ctx.beginPath();
            ctx.moveTo(150,175);
            ctx.lineTo(200, 250);
            ctx.stroke();
            break;
    case 9: 
ctx.beginPath();
            ctx.moveTo(150,110);
            ctx.lineTo(100, 150);
            ctx.stroke();
            break;

    case 10: 
ctx.beginPath();
             ctx.moveTo(150,110);
             ctx.lineTo(200, 150);
             ctx.stroke();
             break;
    case 11: 
ctx.beginPath();
             ctx.moveTo(275,1);
             ctx.lineTo(25, 250);
             ctx.stroke();
             break;
    case 12: 
ctx.beginPath();
             ctx.moveTo(25,1);
             ctx.lineTo(275, 250); 
             ctx.stroke();
             break;
    }
    //ctx.stroke();

}

draw ();
function moveLeft() {
    herox--;
    drawMap();
}

function moveDown() {
    heroy++;
    drawMap();
}

function moveRight() {
    herox++;
    drawMap();
}

function moveUp() {
    heroy--;
    drawMap();
}

document.onkeypress = function(e) {
    let key = e.key;
    switch(key) {
        case "a": moveLeft(); break;
        case "s": moveDown(); break;
        case "d": moveRight(); break;
        case "w": moveUp(); break;
        console.log(key);
   }
}

