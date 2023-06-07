function solution(score) {
  let arr = score.map((el) => parseInt(el[0]) + parseInt(el[1]));
  let arr1 = [...arr].sort((a, b) => b - a);
  let answer = arr.map((el) => arr1.indexOf(el) + 1);
  return answer;
}
