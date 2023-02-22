// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  var answer = [];
  // for (let idx = 0; idx < num_list.length; idx += n) {
  //   answer.push(num_list.slice(idx, idx + n));
  // }
  while (num_list.length) {
    answer.push(num_list.splice(0, n)); // splice vs slice
  }

  return answer;
}
