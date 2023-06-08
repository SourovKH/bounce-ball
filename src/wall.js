class Wall {
  #x;
  #y;
  #shape;
  #width;
  #height;
  #deflection;

  constructor({ start, shape, width, height, deflection }) {
    this.#x = start.x;
    this.#y = start.y;
    this.#shape = shape;
    this.#width = width;
    this.#height = height;
    this.#deflection = deflection;
  }

  collides({ x, y }) {
    const isOnXBound = (this.#x + this.#width) >= x && x >= this.#x;
    const isOnYBound = (this.#y + this.#height) >= y && y >= this.#y;

    return isOnXBound && isOnYBound;
  }

  getNewVelocity(velocity) {
    const newVelocity = {};
    newVelocity.x = this.#deflection.x * velocity.x;
    newVelocity.y = this.#deflection.y * velocity.y;

    return newVelocity;
  }

  display(stdout) {
    for (let i = 0; i < this.#height; i++) {
      stdout.cursorTo(this.#x, this.#y + i);
      stdout.write(this.#shape.repeat(this.#width));
    }
  }
}

exports.Wall = Wall;