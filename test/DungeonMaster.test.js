const DungeonMaster = require("../lib/DungeonMaster");
const Player = require("../lib/Player");



test("getRole() should return \"DungeonMaster\"", () => {
  const testValue = "DungeonMaster";
  const e = new DungeonMaster("Charles Xavier", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can set Email", () => {
  const testValue = "test@test.com";
  const e = new DungeonMaster("Charles Xavier", 1, testValue);
  expect(e.email).toBe(testValue);
});


