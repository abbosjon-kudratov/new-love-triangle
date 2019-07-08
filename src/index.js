/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

   let triangles = 0;
  const pairs = {};

  preferences.forEach((x, i) => (pairs[i + 1] = x));
  Object.keys(pairs).forEach(pair => !pairs[pair] && delete pairs[pair]);

  for (const key in pairs) {
    if (pairs.hasOwnProperty(key)) {
      if (key == pairs[key]) {
        delete pairs[key];
      }

      let start = key;
      let end = pairs[pairs[pairs[key]]];

      if (start == end) {
        delete pairs[key];
        delete pairs[pairs[key]];
        delete pairs[pairs[pairs[key]]];

        triangles++;
      }
    }
  }

  return triangles;
};
