function make(num) {
  let a = 0;
  for (let i = 1; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) a += 2;
  }
  if (Number.isInteger(Math.sqrt(num))) a -= 1;
  return a;
}

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (make(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // 제곱근이 정수면 약수의 개수가 홀수이다.
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
