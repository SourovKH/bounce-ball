class Ball {
  #x;
  #y;
  #dx;
  #dy;
  #content;
  #obstacles;

  constructor({ start, displacement, shape, bounds, obstacles }) {
    this.#x = start.x;
    this.#y = start.y;
    this.#dx = displacement.x;
    this.#dy = displacement.y;
    this.#content = shape;
    this.#obstacles = obstacles;
  }

  show(stdout) {
    stdout.cursorTo(this.#x, this.#y);
    stdout.write(this.#content);
  }

  hide(stdout) {
    stdout.cursorTo(this.#x, this.#y);
    stdout.write(" ".repeat(this.#content.length));
  }

  push(dx, dy) {
    this.#dx += dx;
    this.#dy += dy;
  }

  #collidesOnX() {
    return [
      this.#obstacles.left.collides({x: this.#x, y: this.#y}), 
      this.#obstacles.right.collides({x: this.#x, y: this.#y})
    ].includes(true);
  }

  #collidesOnY() {
    return [
      this.#obstacles.upper.collides({x: this.#x, y: this.#y}), 
      this.#obstacles.bottom.collides({x: this.#x, y: this.#y})
    ].includes(true);
  }

  move() {
    this.#x += this.#dx;
    this.#y += this.#dy;

    if(this.#collidesOnX()) {
      this.#x -= this.#dx;
      this.#dx = 0 - this.#dx;
    }
    
    if(this.#collidesOnY()) {
      this.#y -= this.#dy;
      this.#dy = 0 - this.#dy;
    }
  }
}

exports.Ball = Ball;