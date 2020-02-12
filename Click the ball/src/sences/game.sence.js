class GameScene extends Phaser.Scene {
    constructor(config) {
        super({
            key: 'game-sence'
        });
    }

    preload() {
        
    }

    init(data) {
        this.balls = [];
        this.ballSpawnTime = 1000;
        this.ballSpawnTimeCooldown = 0;
        this.ballShrinkSpeed = 20;
        this.score = 0;
        this.isGameOver = false;
        this.gameOverTime = 0;
    }

    create(data) {
       this.scoreLabel =  this.add.text( 15,5,'Score: 0',
            {
                fontFamily: 'Arial',
                fontSize: 32,
            });
        this.gameOverLabel = this.add.text(0, 0, 'Game Over',
        {
            fontFamily: 'Arial',
            fontSize: 48,

        }
        );
        this.gameOverLabel.x = 400 - this.gameOverLabel.width * 0.5;
        this.gameOverLabel.y = 300 - this.gameOverLabel.height * 0.5;
        this.gameOverLabel.setVisible(false);
    }
    

    update(time, delta) {
        if(this.isGameOver){
            if(time > this.gameOverTime + 1000 && this.input.activePointer.isDown) {
                this.scene.restart();
            }
            return;
        }

        for(let i = this.balls.length - 1; i >= 0; i--){
            this.balls[i].update(time,delta);
            this.balls[i].radius -= this.ballShrinkSpeed * (delta / 1000);

            if(this.balls[i].radius < 3){
                this.destroyBall(i);
                this.onGameOver(time);
            }
            else if(this.balls[i].wasClicked){
                this.onBallCliked(i);
            }  
        }
        this.ballSpawnTimeCooldown -= delta;
        if(this.ballSpawnTimeCooldown < 0){
            this.ballSpawnTimeCooldown = this.ballSpawnTime;
            this.createBall();
        }
    }

    createBall(){
        const x = Phaser.Math.Between(60, 800);
        const y = Phaser.Math.Between(60, 600);

        const ball = new Ball(
            this,
            x,
            y,
            60
        );

        this.balls.push(ball);
    }
    destroyBall(index){
        this.balls[index].destroy();
        this.balls.splice(index, 1);
    }
    onBallCliked(index){
        this.destroyBall(index, 1);
        this.ballSpawnTime *= 0.98;
        this.score++;
        this.scoreLabel.text = 'Score: ' + this.score;

    }
    onGameOver(time){
        this.isGameOver = true;
        this.gameOverTime = time;
        this.gameOverLabel.setVisible(true);
        
    }
}