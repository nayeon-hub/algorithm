function solution(arr) {
  if (arr.length === 1) return [-1];

  let min = [...arr].sort((a, b) => a - b)[0];
  let idx = arr.indexOf(min);

  arr.splice(idx, 1);

  return arr;
}
