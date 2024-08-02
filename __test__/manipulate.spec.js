const { manipulate } = require("../src/function/manipulate");

describe("manipulate", () => {
  test('Permutations of "a"', () => {
    expect(manipulate("a")).toEqual(["a"]);
  });

  test('Permutations of "ab"', () => {
    expect(manipulate("ab").sort()).toEqual(["ab", "ba"].sort());
  });

  test('Permutations of "abc"', () => {
    expect(manipulate("abc").sort()).toEqual(
      ["abc", "acb", "bac", "bca", "cab", "cba"].sort()
    );
  });

  test('Permutations of "aabb"', () => {
    expect(manipulate("aabb").sort()).toEqual(
      ["aabb", "abab", "abba", "baab", "baba", "bbaa"].sort()
    );
  });
});
