class Grid {
    constructor(width, height, blockarea, margin, ctx) {
      this.width = width;
      this.height = height;
      this.ctx = ctx;
      this.blockarea = blockarea;
      this.margin = margin;
      this.blocksize = blockarea - margin;
  
      this.generateDataSet();
    }
  
    generateDataSet() {
      this.updatedCells = [];
      this.dataset = [];
      for (let x = 0; x < width; x++) {
        this.dataset[x] = [height];
        for (let y = 0; y < height; y++) {
          this.setPoint({ x, y }, 'off');
        }
      }
    }
  
    setPoint(point, state) {
      this.dataset[point.x][point.y] = state;
      this.updatedCells.push(point);
    }
  
    getPoint(point) {
      return this.dataset[point.x][point.y];
    }
  
    render() {
      for (let i = 0; i < this.updatedCells.length; i++) {
        let point = this.updatedCells[i];
        let state = this.getPoint(point);
        this.ctx.fillStyle = this.getFillStyle(state);
        ctx.clearRect(point.x * blockarea, point.y * blockarea, blocksize, blocksize);
        ctx.fillRect(point.x * blockarea, point.y * blockarea, blocksize, blocksize);
      }
      this.updatedCells = [];
    }
  
    getFillStyle(state) {
      switch (state) {
        case 'on':
          return 'green';
        case 'off':
          return 'lightgrey';
        case 'food':
          return 'black';
        default:
          return 'lightgrey';
      };
    }
  }
  
  class Snake {
    constructor(position, direction) {
      this.parts = [position];
      this.direction = direction;
      this.newDirection = null;
    }
  
    update() {
      let updates = [];
  
      if (this.newDirection) {
        this.direction = this.newDirection;
        this.newDirection = null;
      }
  
      let next = this.updatePosition()
      this._previousTailPosition = Object.assign({}, this.parts[this.parts.length - 1]);
      this.parts[this.parts.length - 1] = next;
      let lastPart = this.parts.splice(-1, 1)[0];
      this.parts.unshift(lastPart);
  
      updates.push({ point: this.head, state: 'on' });
      updates.push({ point: this._previousTailPosition, state: 'off' });
      return updates;
    }
  
    updatePosition() {
      let next = Object.assign({}, this.parts[0]);
      switch (this.direction) {
        case 'up':
          next.y--;
          break;
        case 'down':
          next.y++;
          break;
        case 'right':
          next.x++;
          break;
        case 'left':
          next.x--;
          break;
      }
      return next;
    }
  
    get head() {
      return Object.assign({}, this.parts[0]);
    }
  
    get previousTailPosition() {
      return this._previousTailPosition;
    }
  
    grow() {
      this.parts.push(Object.assign({},this.previousTailPosition));
      return { point:this.previousTailPosition, state:'on' };
    }
  
    get isAlive() {
      let collidesWithSelf = this.parts.filter(_ => this.collision(_, this.head)).length > 1;
      let collidesWithEdge = this.head.x < 0 ||
        this.head.x >= height ||
        this.head.y < 0 ||
        this.head.y >= width;
      return (!collidesWithEdge && !collidesWithSelf);
    }
  
    collision(a, b) {
      return (a.x === b.x && a.y === b.y);
    }
  }
  
  class Game {
    constructor(grid, snake) {
      this.grid = grid;
      this.snake = snake;
      this.food = null;
      this.score = 0;
    }
  
    async run() {
  
      setInterval(() => {
        if (this.food === null) {
          const x = Math.floor(Math.random() * (this.grid.width - 1 - 0)) + 0;
          const y = Math.floor(Math.random() * (this.grid.height - 1 - 0)) + 0;
          this.food = { x, y, isRendered: false };
        }
      }, 1000);
  
      while (true) {
        this.grid.render();
  
        const snakeUpdates = this.snake.update();
  
        if (!this.snake.isAlive)
          break;
  
        snakeUpdates.forEach(x => {
          this.grid.setPoint(x.point, x.state);
        });
  
        if(this.food) {
          if(!this.food.isRendered)
            grid.setPoint(this.food, 'food');
          this.food.isRendered = true;
  
          if(this.snake.collision(this.snake.head, this.food)) {
            let growUpdate = this.snake.grow();
            this.grid.setPoint(growUpdate.point, growUpdate.state);
            this.food = null;
            this.score++;
            document.getElementById("score").innerHTML = `Points: ${game.score}`;
          }
        }
  
        await this.sleep(delay);
      }
  
      document.getElementById("gameover").innerHTML = `You crashed!`;
  
    }
  
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    keydownHandler(event) {
      if (this.snake.newDirection) return;
      switch (event.keyCode) {
        case 65: //left
          this.snake.newDirection = this.snake.direction !== 'right' ? 'left' : 'right';
          break;
        case 87: //up
          this.snake.newDirection = this.snake.direction !== 'down' ? 'up' : 'down';
          break;
        case 68:  //right
          this.snake.newDirection = this.snake.direction !== 'left' ? 'right' : 'left';
          break;
        case 83: //down
          this.snake.newDirection = this.snake.direction !== 'up' ? 'down' : 'up';
          break;
      }
  
    }
  }
  
  let width = 60;
  let height = 60;
  let blockarea = 10;
  let margin = 1;
  let blocksize = blockarea - margin;
  let delay = 75;

  let canvas = document.getElementById('game');
  canvas.width = width * blockarea;
  canvas.height = height * blockarea;
  let ctx = canvas.getContext('2d', { alpha: true });
  
  let grid = new Grid(width, height, blockarea, margin, ctx);
  let snake = new Snake({ x: 10, y: 10 }, 'right');
  let game = new Game(grid, snake, delay);
  
  document.addEventListener('keydown', game.keydownHandler.bind(game));
  document.getElementById("score").innerHTML = `Points: ${game.score}`;
  
  game.run();

  