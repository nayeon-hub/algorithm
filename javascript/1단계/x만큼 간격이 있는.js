function solution(x, n) {
  var answer = [x];
  let xx = x;
  while (answer.length < n) {
    xx += x;
    answer.push(xx);
  }
  return answer;
}

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    // i 활용, 1~n까지 반복
    answer.push(x * i);
  }
  return answer;
}

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
