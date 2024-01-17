const findShortestString = require("./find-shortest-string");

test("findShortestString finds the longest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["brave", "dancing"])).toBe("brave");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["chocolate", "fountain"])).toBe("fountain");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["brave", "dancing", "monkey", "flooring"])).toBe(
    "brave"
  );
});
