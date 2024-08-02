/**
 *
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (texts) => {
  // TODO : start your code here
  const smileyPattern = /^[:;][-~]?[)D]$/;
  return texts.filter((face) => smileyPattern.test(face)).length;
};

module.exports = {
  countSmilyFace,
};
