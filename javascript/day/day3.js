// LV0 세로 읽기

function solution(my_string, m, c) {
  let result = '';
  let start = 0;
  let end = m;

  while (my_string.length >= end) {
    let sample = my_string.slice(start, end);
    result += sample[c - 1];
    start += m;
    end += m;
  }
  return result;
}

// 풀이 1 - 정규표현식
// 특수문자 . : 정확히 1개 문자 매칭 : 문자 하나하나, { } : 반복 횟수
const solution = (s, m, c) =>
  s
    .match(new RegExp(`.{${m}}`, 'g'))
    .map((v) => v[c - 1])
    .join('');

// 풀이 2 - 인덱스 + reduce
// reduce((acc,cur,index) => {}, initialValue)
function solution(my_string, m, c) {
  return Array.from(my_string).reduce((word, v, i) => {
    return (i % m) + 1 === c ? word + v : word;
  }, '');
}

// 풀이 3 - 인덱스 + filter
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join('');
}

// LV0 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
function solution(myString, pat) {
  let idx = myString.lastIndexOf(pat);
  return myString.slice(0, idx + pat.length);
}
