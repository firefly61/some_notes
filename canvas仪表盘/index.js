let canv = document.getElementById('canv');
var ctx = canv.getContext('2d');
ctx.beginPath();
ctx.arc(150, 150, 100, 0.85*Math.PI, 0.15*Math.PI, false);
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.strokeStyle = "rgba(222, 101, 110, 0.5)";
ctx.fillStyle = "rgba(222, 101, 110, 1)";
ctx.font = "50px Arial";
ctx.textAlign="center";
ctx.fillText("80", 140, 180);
ctx.stroke();

var ctx2 = canv.getContext('2d');
ctx2.beginPath();
ctx2.arc(150, 150, 100, 0.85*Math.PI, 2*Math.PI, false);
ctx2.lineWidth = 16;
ctx2.lineCap = 'round';
ctx2.strokeStyle = "rgba(222, 101, 110, 1)";
ctx2.fillStyle = "rgba(222, 101, 110, 1)";
ctx2.font = "25px Arial";
ctx2.textAlign="start";
ctx2.fillText("%", 170, 180);
ctx2.stroke();

// let num = 0.85;
// let num2 = 0.85;
// let timer = setInterval(() => {
//     console.log(num);
//     if(num2 < 2.15) {
//         num += 0.1;
//         num2 += 0.1;
//         ctx2.arc(150, 150, 100, num*Math.PI, num2*Math.PI, false);
//         ctx2.stroke();
//     }else {
//         clearInterval(timer);
//     }
// }, 1000);