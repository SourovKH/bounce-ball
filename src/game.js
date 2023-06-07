const { Ball } = require("./ball.js");
const { Wall } = require("./wall.js");

const showCursor = () => process.stdout.write('\u001B[?25h');
const hideCursor = () => process.stdout.write('\u001B[?25l');

const setup = (stdout) => {
  const [width, height] = stdout.getWindowSize();
  const walls = {};
  walls.upper = new Wall({ start: { x: 0, y: 0 }, shape: "▄", width: width, height: 1 });
  walls.bottom = new Wall({ start: { x: 0, y: height - 6 }, shape: "▀", width: width, height: 1 });
  walls.left = new Wall({ start: { x: 0, y: 1 }, shape: "█", width: 1, height: height - 7 });
  walls.right = new Wall({ start: { x: width - 1, y: 1 }, shape: "█", width: 1, height: height - 7 });

  const ball = new Ball({
    start: { x: 10, y: 10 },
    displacement: { x: 0, y: 0 },
    shape: "🌏",
    bounds: { width: width - 6, height: height - 6 },
    obstacles: walls
  });

  return { walls, ball };
}

const displayWalls = (walls, stdout) => {
  Object.values(walls).forEach(wall => wall.display(stdout));
}

const main = () => {
  const { stdout } = process;
  const { walls, ball } = setup(stdout);

  console.clear();
  hideCursor();
  displayWalls(walls, stdout);

  ball.show(stdout);
  ball.push(3, 1);

  const bounce = () => {
    ball.hide(stdout);
    ball.move();
    ball.show(stdout);
  }

  const gameTime = setInterval(bounce, 100);

  setTimeout(() => {
    clearInterval(gameTime);
    showCursor();
  }, 100000);
}

main();