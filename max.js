// 当没有参数时返回 -Infinity
function max1(first = -Infinity, ...rest) {
  let maxValue = first;
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }
  return maxValue;
}

// console.log(max1(1, 12, 142, 4));
