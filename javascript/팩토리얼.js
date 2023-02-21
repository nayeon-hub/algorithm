// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

function Factorial(a, n) {
  let share = a / n;
  if (share === 1) {
    return n;
  } else if (Math.ceil(share) === 1) {
    // 예외처리 n = 7, result = 3
    return n - 1;
  }
  return Factorial(share, n + 1);
}

function solution(n) {
  let a = n;
  let answer = Factorial(a, 1);
  return answer;
}

// 다른 풀이
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}
