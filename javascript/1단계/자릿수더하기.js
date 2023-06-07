function solution(n) {
  var answer = n
    .toString()
    .split('')
    .reduce((arr, cur) => arr + parseInt(cur), 0);

  return answer;
}
