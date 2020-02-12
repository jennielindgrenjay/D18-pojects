const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500;
canvas.height = 300;

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init();
});

let mouse = {
    x: 10,
    y: 10
}

const colors = [
    '#2185C5', '#7ECEFD',
    '#FFF6E5', '#FF7F66'
]

addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);

    
}

function circle(x, y, radius, color) {
   
   this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        this.draw();
    };

    this.draw = function() {
        c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
    };

}

let circle1;
let circle2;
function init() {
    circle1 = new circle(150, 150, 100, 'green');
    circle2 = new circle(0, 0, 30, 'red');
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    if (getDistance( circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius +
    circle2.radius) {
        circle1.color = 'red';
    }
    else {
        circle1.color = 'green';
    }

    document.getElementById('x-cordinet-for-c1').innerHTML = 'Circle 1:s x cordinates: ' + circle1.x;
    document.getElementById('y-cordinet-for-c1').innerHTML = 'Circle 1:s y cordinates: '  +circle1.y;
    document.getElementById('x-cordinet-for-c2').innerHTML = 'Circle 2:s x cordinates: ' + circle2.x;
    document.getElementById('y-cordinet-for-c2').innerHTML = 'Circle 2:s y cordinates: ' + circle2.y;


}



init();
animate();
