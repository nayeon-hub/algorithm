function solution(a, b) {
  let sum = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
}

function solution(a, b) {
  // Math.min, Math.max
  let s = 0;
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2; // 가우스의 덧셈법 : 양끝의 합 * 수의 갯수 / 2
}
