
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) == false || matrix.length == 0) {
    return [];
  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 1) {
        matrix[i].reverse();
    }
  }
  return matrix.join(",").split(",").map(Number);
  }
}
