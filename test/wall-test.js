const { describe, it } = require("node:test");
const { ok } = require("assert");
const { Wall } = require("../src/wall");

describe("Wall", () => {
  describe("collides", () => {
    it("Should give true when the point is on start of the wall", () => {
      const start = { x: 0, y: 0 };
      const shape = "X";
      const width = 1;
      const height = 1;

      const testWall = new Wall({ start, shape, width, height });

      const point = {x: 0, y: 0};
      const actual = testWall.collides(point);

      ok(actual);
    });
  })
});