
canvas = document.getElementById
ctx= canvas.getContext

ctx.beginPath();
ctx.strokeStyle -"grey";
ctx.linewidth = 1;
ctx.arc(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle -"red";
ctx.linewidth = 5;
ctx.arc(400,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle -"blue";
ctx.linewidth = 5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();