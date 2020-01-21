const Artificer = require("../lib/Artificer");

test("Can set Email", () => {
  const testValue = "test@test.com";
  const e = new Artificer("Jean Grey", 1, testValue, "battle smith");
  expect(e.email).toBe(testValue);
});

test("getRole() should return \"Artificer\"", () => {
  const testValue = "Artificer";
  const e = new Artificer("Jean Grey", 1, "test@test.com", "battle smith");
  expect(e.getRole()).toBe(testValue);
});

test("getSubclass() should return \"battle smith\"", () => {
  const testValue = "battle smith";
  const e = new Artificer("Jean Grey", 1, "test@test.com", testValue);
  expect(e.subclass).toBe(testValue);
});

test("getName() should return \"Jean Grey\"", () => {
  const testValue = "Jean Grey";
  const e = new Artificer(testValue, 1, "test@test.com", "battle smith");
  expect(e.name).toBe(testValue);
});

test("getLvl() should return 2", () => {
  const testValue = 2;
  const e = new Artificer("Jean Grey", testValue, "test@test.com", "battle smith");
  expect(e.lvl).toBe(testValue);
});




