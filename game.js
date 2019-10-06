"use strict";
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let ballRadius = 10;
let x = canvas.width-ballRadius/2;
let y = canvas.height-ballRadius/2;
let dx = 2;
let dy = -2;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    drawBall(); 
  if(x + dx > width || x + dx < 0) {
    dx = -dx;
  }

if(y + dy > height || y + dy < 0) {
    dy = -dy;
}
    x += dx;
    y += dy;

  /*  ctx.beginPath();
    ctx.moveTo(80, 105);
    ctx.lineTo(105, 25);
    ctx.lineTo(130, 105);
    ctx.lineTo(105, 70);
    ctx.lineTo(80, 105)
    ctx.stroke();
    ctx.closePath(); */
}
  
setInterval(draw,10);