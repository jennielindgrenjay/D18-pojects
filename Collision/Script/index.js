const randomColor = colors => colors[Math.floor(Math.random() * colors.length)];

const colors = [
    '#e53935',
    '#d81b60',
    '#8e24aa',
    '#5e35b1',
    '#3949ab',
    '#1e88e5',
    '#039be5',
    '#00acc1',
    '#00897b',
    '#43a047',
    '#ffeb3b',
    '#ef6c00'
]

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})

const gui = new dat.GUI()

const controls = {
    dx: 5,
    dy: 5,
    tail: -5
}

gui.add(controls, 'dx', 0, 100)
gui.add(controls, 'dy', 0, 100)
gui.add(controls, 'tail', -10, 0)

class Circel {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.color = color
    }
}


Circel.prototype.draw = function () {
    c.beginPath()
    c.fillStyle = this.color
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fill()
    c.closePath()
}

Circel.prototype.update = function () {
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.color = randomColor(colors)
        controls.dy = -controls.dy
    }
    this.y -= controls.dy

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.color = randomColor(colors)
        controls.dx = -controls.dx
    }
    this.x += controls.dx

    this.draw()
}

//If dx and dy are the same it will get caught in a loop.
const circel1 = new Circel(innerWidth / 2, innerHeight / 2, 5, 10, 30, randomColor(colors))
const animate = () => {
    requestAnimationFrame(animate)
    c.fillStyle = `rgba(33, 33, 33, ${-controls.tail / 10})` 
    c.fillRect(0, 0, canvas.width, canvas.height)

    circel1.update()
}

animate()