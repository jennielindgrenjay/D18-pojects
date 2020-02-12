
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

const colors = [
    {r: 0, g: 255, b: 0}, 
    {r: 0, g: 155, b: 255}, 
    {r: 255, g: 155, b: 10},
    {r: 255, g: 0, b: 0},
];

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(xDist * xDist + yDist * yDist);
}

function rotateVelocities(velocity, theta) {
    const rotatedVelocity = {
        x: velocity.x * Math.cos(theta) - velocity.y * Math.sin(theta),
        y: velocity.x * Math.sin(theta) + velocity.y * Math.cos(theta)
    };
    return rotatedVelocity;
}

function Circle(x, y, radius, rgb) {
    this.x = x;
    this.y = y;
    this.velocity = {
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 3
    };
    this.radius = radius;
    this.mass = 1;
    this.opacity = 0;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;

    this.update = circles => {
        this.draw();

        for (let i = 0; i < circles.length; i++) {
            const otherCircles = circles[i];
            if (this.x === otherCircles.x) continue;

            if (distance(this.x, this.y, otherCircles.x, otherCircles.y) - this.radius * 2 < 0) {

                const res = {
                    x: this.velocity.x - otherCircles.velocity.x,
                    y: this.velocity.y - otherCircles.velocity.y
                };

                if (res.x * (otherCircles.x - this.x) + res.y * (otherCircles.y - this.y) >= 0) {

                    const m1 = this.mass;
                    const m2 = otherCircles.mass;
                    const theta = -Math.atan2(otherCircles.y - this.y, otherCircles.x - this.x);

                    const rotatedVelocity1 = rotateVelocities(this.velocity, theta);
                    const rotatedVelocity2 = rotateVelocities(otherCircles.velocity, theta);

                    const swapVelocity1 = { x: rotatedVelocity1.x * (m1 - m2) / (m1 + m2) + rotatedVelocity2.x * 2 * m2 / (m1 + m2), y: rotatedVelocity1.y };
                    const swapVelocity2 = { x: rotatedVelocity2.x * (m1 - m2) / (m1 + m2) + rotatedVelocity1.x * 2 * m2 / (m1 + m2), y: rotatedVelocity2.y };

                    const u1 = rotateVelocities(swapVelocity1, -theta);
                    const u2 = rotateVelocities(swapVelocity2, -theta);

                    this.velocity.x = u1.x;
                    this.velocity.y = u1.y;
                    otherCircles.velocity.x = u2.x;
                    otherCircles.velocity.y = u2.y;
                }
            }
        }

        if (distance() - this.radius * 2 < 100 && this.opacity <= 0.2) {
            this.opacity += 0.01;
        } else if (this.opacity > 0) {
            this.opacity -= 0.01;
        }

        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
            this.velocity.x = -this.velocity.x;

        if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
            this.velocity.y = -this.velocity.y;

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    };

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b}, 1)`;
        c.stroke();
        c.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.opacity}`;
        c.fill();
        c.closePath();
    };
}


 function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let circle;

function init() {
    circle = [];
    let radius = 15.5;

    for (let i = 0; i < 150; i++) {
        let x = randomIntFromRange(radius, innerWidth - radius);
        let y = randomIntFromRange(radius, innerHeight - radius);

        if (circle.length >= 1) {
            for (let j = 0; j < circle.length; j++) {
                if (distance(x, y, circle[j].x, circle[j].y) - radius * 2 < 0) {
                    x = randomIntFromRange(radius, innerWidth - radius);
                    y = randomIntFromRange(radius, innerHeight - radius);

                    j = -1;
                    continue;

                }
            }
        }

        circle.push(new Circle(x, y, radius, randomColor(colors)));
    }
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    circle.forEach(circles => {
        circles.update(circle);
    });
}

 init();
 animate();