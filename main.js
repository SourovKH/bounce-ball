const { Ball } = require("./src/ball.js");
const { Game } = require("./src/controller.js");
const { Wall } = require("./src/wall.js");

const setupWalls = (windowSize) => {
  const [width, height] = windowSize;
  const walls = [];
  walls.push(new Wall({ start: { x: 0, y: 0 }, shape: "▄", width: width, height: 1, deflection: { x: 1, y: -1 } }));
  walls.push(new Wall({ start: { x: 0, y: height - 6 }, shape: "▀", width: width, height: 1, deflection: { x: 1, y: -1 } }));
  walls.push(new Wall({ start: { x: 0, y: 1 }, shape: "█", width: 1, height: height - 7, deflection: { x: -1, y: 1 } }));
  walls.push(new Wall({ start: { x: width - 1, y: 1 }, shape: "█", width: 1, height: height - 7, deflection: { x: -1, y: 1 } }));

  return walls;
}

const setupBall = (startPosition) => {
  return new Ball({ ...startPosition }, { x: 0, y: 0 }, "🥎");
}

const main = () => {
  const { stdout } = process;
  const windowSize = stdout.getWindowSize();
  const walls = setupWalls(windowSize);
  const ball = setupBall({ x: 2, y: 2 });

  const game = new Game(walls, ball, stdout);
  game.displayObstacles();
  game.start();
}

main();