var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth=4;
ctx.moveTo(150,150);
ctx.quadraticCurveTo(200, 0, 250, 150);
ctx.fillStyle = "gold";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=4;
ctx.moveTo(50,200);
ctx.quadraticCurveTo(200, 50, 350, 200);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=4;
ctx.moveTo(50,200);
ctx.quadraticCurveTo(200, 350, 350, 200);
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();