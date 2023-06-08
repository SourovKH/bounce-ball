class Ball {
  #position;
  #velocity;
  #shape;

  constructor(startingPosition, initVelocity, shape) {
    this.#position = startingPosition;
    this.#velocity = initVelocity;
    this.#shape = shape;
  }

  show(stdout) {
    stdout.cursorTo(this.#position.x, this.#position.y);
    stdout.write(this.#shape);
  }

  hide(stdout) {
    stdout.cursorTo(this.#position.x, this.#position.y);
    stdout.write(" ".repeat(this.#shape.length));
  }

  set velocity(newVelocity) {
    this.#velocity = newVelocity;
  }

  move() {
    this.#position.x += this.#velocity.x;
    this.#position.y += this.#velocity.y;
  }

  isColliding(obstacle) {
    const upcomingX = this.#position.x + this.#velocity.x;
    const upcomingY = this.#position.y + this.#velocity.y;

    return obstacle.collides({x: upcomingX, y: upcomingY});
  }
}

exports.Ball = Ball;