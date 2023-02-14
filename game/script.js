let canvas = document.getElementById("cangame");
let context = canvas.getContext("2d");
let nx = 4;
let ny = 3;
let sqside = 50
let herox = 2;
let heroy = 1;
canvas.height = nx * sqside;
canvas.weight = ny * sqside;
for (let i = 0;i < nx; i++){
    for(let j = 0;j < ny; j++){
context.strokeRect(i * sqside, j * sqside, sqside, sqside);
    }
}
//context.fillRect(herox* sqside,heroy * sqside,sqside,sqside);
let heroimg = new Image();
heroimg.src = "hero.png";
context.drawImage(heroimg,herox* sqside,heroy * sqside,sqside,sqside);