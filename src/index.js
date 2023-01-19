
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  } else if (matrix !== null) {
    let resultArr = matrix.map((elem, index, array) => {
      if (index % 2 !== 0) {
        return array[index].reverse()
      } else {
        return array[index]
      }
    })
    return resultArr.flat()
  }

}
