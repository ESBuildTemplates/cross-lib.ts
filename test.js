
const lib = require(".")

test("hello world", () => {
  expect(lib.hello()).toBe("Hello World!");
})