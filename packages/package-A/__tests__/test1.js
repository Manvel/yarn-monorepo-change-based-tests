const data = require("../data.json");
describe("package-A test1", () => {
  it("testcase 1.", async () => {
    // change 1
    expect(data.paramA).toBe("value1");
  });
});