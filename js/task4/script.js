//DOM Elements
const canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext("2d");
// Init an array 
let balls = [];
//counter for balls
let count = 0;
//class for creating balls
class Ball {
    constructor(x, y, radius) {
        this.x = x,
            this.y = y,
            this.radius = radius,
            this.color = "rgb(" + getRandom(0, 255) + ","
            + getRandom(0, 255) + "," + getRandom(0, 255) + ")",
            this.dx = 3,
            this.dy = -3;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath;
    }
    update() {
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}
//EVENTS
window.addEventListener('resize', resizeCanvas, false);
//FUNCTIONS

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//FUNCTION TO GET RANDOM NUMBER
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//create new ball and push it to array
let timer = setInterval(() => {
    if (count < 20) {
        let randomNumber = getRandom(10, 30);
        balls.push(new Ball(randomNumber, randomNumber, randomNumber));
        count++;
    } else {
        clearInterval(timer);
        alert("There are 20 balls on the canvas!")
    }
}, 5000);
//FOR CANVAS SIZE
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
//UPDATE
function update() {
    clearCanvas();
    for (let i = 0, ball; ball = balls[i]; i++) {
        ball.draw(); // this will draw current ball
        ball.update(); // this will update its position
    }
    requestAnimationFrame(update);
};
//RUN
update();