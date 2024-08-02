/**
 *
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (numbers) => {
  const counts = {};

  numbers.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  for (const [num, count] of Object.entries(counts)) {
    if (count % 2 !== 0) {
      return parseInt(num, 10);
    }
  }
};

module.exports = {
  findOddNumber,
};
