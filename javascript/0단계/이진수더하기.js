function solution(bin1, bin2) {
  let num = parseInt(bin1, 2) + parseInt(bin2, 2);
  let answer = num.toString(2);
  return answer;
}
