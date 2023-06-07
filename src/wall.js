class Wall {
  #x;
  #y;
  #shape;
  #width;
  #height;

  constructor({ start, shape, width, height }) {
    this.#x = start.x;
    this.#y = start.y;
    this.#shape = shape;
    this.#width = width;
    this.#height = height;
  }
  
  collides({ x, y }) {
    const isOnXBound = (this.#x + this.#width) >= x && x >= this.#x;
    const isOnYBound = (this.#y + this.#height) >= y && y >= this.#y;

    return isOnXBound && isOnYBound;
  }

  display(stdout) {
    for (let i = 0; i < this.#height; i++) {
      stdout.cursorTo(this.#x, this.#y + i);
      stdout.write(this.#shape.repeat(this.#width));
    }
  }
}

exports.Wall = Wall;