class Ball extends Phaser.GameObjects.Arc {
    constructor(scene, x, y, radius) {
        super(
            scene, x, y, radius,
            0, 360, false,
            0xff0000, 1

        );
        scene.add.existing(this);

        this.wasMouseDown = false;
        this.wasClicked = false;
    }

    update(time, delta) {
        this.wasClicked = false;

        let xMouse = this.scene.input.activePointer.x;
        let yMouse = this.scene.input.activePointer.y;
        const isMouseInside = this.testPoint(xMouse, yMouse);
        const isMouseDown = this.scene.input.activePointer.isDown;

        if (isMouseDown && 
            this.wasMouseDown == false && 
            isMouseInside) 
            {
            this.wasClicked = true;
        }


        this.wasMouseDown = isMouseDown;
    }
    /**
     * kollar om denna cirkel inehåller punkten x, y.
     */
    testPoint(x, y) {
        const dx = x - this.x
        const dy = y - this.y
        return Math.sqrt(dx * dx + dy * dy) <= this.radius;
    }
}