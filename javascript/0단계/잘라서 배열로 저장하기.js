// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  var answer = [];
  for (let i = 0; i <= parseInt(my_str.length / n); i++) {
    answer.push(my_str.slice(i * n, (i + 1) * n));
  }
  if (my_str.length % n === 0) {
    answer.pop();
  }
  return answer;
}

// 다른 풀이
function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}
// parseInt(my_str.length / n) 대신에 i += n

function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'));
}
// String.prototype.match() 정규식에 g 플래그가 포함되어 있으면, 일치는 객체가 아닌 일치하는 하위 문자열을 포함하는 Array를 반환합니다.
