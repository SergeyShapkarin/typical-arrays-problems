exports.min = function min(array) {
  if (!array || !array.length) {
    return 0;
  } else {
    return Math.min(...array);
  }
}

exports.max = function max(array) {
  if (!array || !array.length) {
    return 0;
  } else {
    return Math.max(...array);
  }
}

exports.avg = function avg(array) {
    if (!array || !array.length) {
      return 0;
    } else {
        let sum = 0;
        for (let i of array) {
          sum += i
        }
      return (sum / array.length)
    }
}