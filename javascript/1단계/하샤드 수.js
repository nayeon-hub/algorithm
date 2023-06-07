function solution(x) {
  let sum = x
    .toString()
    .split('')
    .reduce((arr, cur) => arr + parseInt(cur), 0);
  return x % sum === 0 ? true : false;
}
