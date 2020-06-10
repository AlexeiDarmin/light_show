
export function startEngine(canvasID: string) {
    const canvas = <HTMLCanvasElement>document.getElementById(canvasID);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    const source = [canvas.width / 2, canvas.height / 2]

    ctx.strokeStyle = "white";



    // ctx.beginPath();
    // ctx.moveTo(20, 20);
    // ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    // ctx.stroke();




    for(let i = 0; i < 50; i++){
        drawAngledLine(ctx, canvas,  getRandomColor(), i % 360, i % 360)
    }


    // ctx.lineWidth = 10;
    // ctx.lineCap = 'round';

    // (function drawLine(ctx: CanvasRenderingContext2D, i: number) {
    //     line(ctx, 155 + (57 - i) / 2, i, 155 + (57 - (i - 2)) / 2, (i - 2));
    //     line(ctx, 245 - (57 - i) / 2, i, 245 - (57 - (i - 2)) / 2, (i - 2));
    //     if (i > 35) {
    //         setTimeout(function () {
    //             drawLine(ctx, i - 2);
    //         }, 10);
    //     }
    // })(ctx, 57);

}


// function line(ctx: CanvasRenderingContext2D, xa: number, ya: number, xb: number, yb: number) {
//     ctx.beginPath();
//     ctx.moveTo(xa, ya);
//     ctx.lineTo(xb, yb);
//     ctx.stroke();
// }



function drawAngledLine(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string, radius = 0, angle = 0) {

    ctx.lineWidth = 3;
    ctx.strokeStyle = color
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);



    let angleDelta = 100
    for (var n = 0; n < 15000; n++) {
        radius += 0.50;
        // make a complete circle every 50 iterations
        angle += (Math.PI * 2) / angleDelta;
        angleDelta += 2
        var x = canvas.width / 2 + radius * Math.cos(angle);
        var y = canvas.height / 2 + radius * Math.sin(angle);
        ctx.lineTo(x, y);
    }

    ctx.stroke();

}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }