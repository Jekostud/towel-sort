
// You should implement your task here.

  module.exports = function towelSort (matrix) {
    if (matrix == null) {
        return []
    }
    return matrix.reduce((a, b, c) => a.concat(c % 2 === 0 ? b : b.reverse()), []);
}


