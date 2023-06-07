function solution(array) {
  let obj = new Object();
  let num = 0;
  let answer = [];
  array.forEach((el) => (obj[el] ? (obj[el] += 1) : (obj[el] = 1)));
  for (const el in obj) {
    if (obj[el] === num) {
      answer.push(el);
    } else if (obj[el] > num) {
      answer = [el];
      num = obj[el];
    }
  }

  return answer.length > 1 ? -1 : parseInt(answer[0]);
}

// 다른 풀이
function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

// sort 값이 양수면 b를 반환 : 내림차순, 음수면 a를 반환 : 오름차순
