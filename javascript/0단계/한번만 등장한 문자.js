// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
  let arr = s.split('').sort();
  let cur = arr[0];
  let answerArr = {};
  let answer = '';

  answerArr[cur] = 0;

  for (let s of arr) {
    if (cur === s) {
      answerArr[cur] += 1;
    } else {
      cur = s;
      answerArr[s] = 1;
    }
  }
  for (let a in answerArr) {
    if (answerArr[a] === 1) {
      console.log(a);
      answer += a;
    }
  }
  return answer;
}

// 다른 문제 풀이
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join('');
}
