/**
 *
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
  const results = new Set();

  const permute = (arr, l, r) => {
    if (l === r) {
      results.add(arr.join(""));
    } else {
      for (let i = l; i <= r; i++) {
        [arr[l], arr[i]] = [arr[i], arr[l]]; // swap

        permute(arr, l + 1, r);

        [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
      }
    }
  };

  permute(text.split(""), 0, text.length - 1);

  return Array.from(results);
};

module.exports = {
  manipulate,
};
