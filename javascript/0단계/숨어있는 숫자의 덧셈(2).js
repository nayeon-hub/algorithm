function solution(my_string) {
  var answer = 0;
  let strArray = my_string.split(/[a-zA-Z]/);

  strArray.forEach((el) => {
    if (el !== '') {
      answer += Number(el);
    }
  });

  return answer;
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
} // 정규표현식 : \D+ 숫자와 연결된 그 어떤 것들...?
// Number(" ") => 0
