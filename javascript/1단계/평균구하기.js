function solution(arr) {
  let sum = arr.reduce((pre, cur) => pre + cur, 0);

  return sum / arr.length;
}
