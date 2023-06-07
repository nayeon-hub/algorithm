function solution(n) {
  n = n
    .toString()
    .split('')
    .map((el) => parseInt(el))
    .sort((a, b) => b - a);

  return parseInt(n.join(''));
}
