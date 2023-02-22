function solution(i, j, k) {
  var answer = 0;
  let value = k.toString();
  for (let x = i; x <= j; x++) {
    x.toString()
      .split('')
      .forEach((el) => (el === value ? answer++ : null));
  }
  return answer;
}

// 다른 코드 풀이
function solution(i, j, k) {
  let a = '';
  for (let x = i; x <= j; x++) {
    a += x;
  }

  return a.split(k).length - 1; // split을 이용한 "여집합"
}
