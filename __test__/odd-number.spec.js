const { findOddNumber } = require("../src/function/odd-number");

describe("findOddNumber", () => {
  test("Find the odd integer in [7]", () => {
    expect(findOddNumber([7])).toEqual(7);
  });

  test("Find the odd integer in [0]", () => {
    expect(findOddNumber([0])).toEqual(0);
  });

  test("Find the odd integer in [1, 1, 2]", () => {
    expect(findOddNumber([1, 1, 2])).toEqual(2);
  });

  test("Find the odd integer in [0, 1, 0, 1, 0]", () => {
    expect(findOddNumber([0, 1, 0, 1, 0])).toEqual(0);
  });

  test("Find the odd integer in [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]", () => {
    expect(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toEqual(4);
  });
});
