const { countSmilyFace } = require("../src/function/smily");

describe("countSmilyFace", () => {
  test('Count smiley in [":)", ";(", ";}", ":-D"]', () => {
    expect(countSmilyFace([":)", ";(", ";}", ":-D"])).toEqual(2);
  });

  test('Count smiley in  [";D", ":-(", ":-)", ";~)"]', () => {
    expect(countSmilyFace([";D", ":-(", ":-)", ";~)"])).toEqual(3);
  });

  test("Count smiley in [';]', ':[', ';*', ':$', ';-D']", () => {
    expect(countSmilyFace([";]", ":[", ";*", ":$", ";-D"])).toEqual(1);
  });
});
