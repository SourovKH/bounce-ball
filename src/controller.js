const showCursor = (stdout) => stdout.write('\u001B[?25h');
const hideCursor = (stdout) => stdout.write('\u001B[?25l');

class Game {
  #obstacles;
  #ball;
  #stdout;

  constructor(obstacles, ball, stdout) {
    this.#obstacles = obstacles;
    this.#ball = ball;
    this.#stdout = stdout;
  }

  displayObstacles() {
    this.#stdout.cursorTo(0, 0);
    hideCursor(this.#stdout);
    this.#stdout.clearScreenDown();

    this.#obstacles.forEach(obstacle => {
      obstacle.display(this.#stdout);
    })
  }

  start() {
    this.#ball.show(this.#stdout);

    const bounce = () => {
      this.#ball.hide(this.#stdout);
      this.#ball.move();
      this.#ball.show(this.#stdout);
    }

    const gameTime = setInterval(bounce, 100);

    setTimeout(() => {
      clearInterval(gameTime);
      showCursor();
    }, 100000);
  }
}

exports.Game = Game;