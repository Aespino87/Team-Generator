const Player = require("../lib/Player");

test("Can instantiate Player instance", () => {
  const e = new Player();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Scott Summers";
  const e = new Player(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 15;
  const e = new Player("Jean Grey", testValue);
  expect(e.lvl).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Player("Jean Grey", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Scott Summers";
  const e = new Player(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getLvl()", () => {
  const testValue = 100;
  const e = new Player("Jean Grey", testValue);
  expect(e.getLvl()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Player("Jean Grey", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Player\"", () => {
  const testValue = "Player";
  const e = new Player("Scott Summers", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
