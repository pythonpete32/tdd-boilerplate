import { sayHello } from "../src";
console.log(sayHello)
test("sayHello", () => {
  expect(sayHello("foo")).toBe("Hello, foo!");
});
