function solution(s) {
  let str = s.split(' ');
  let answerArr = [];
  for (let i of str) {
    if (parseInt(i)) {
      answerArr.push(parseInt(i));
    } else if (i === 'Z') {
      answerArr.pop();
    }
  }
  let answer = answerArr.reduce((pre, cur) => pre + cur, 0);
  return answer;
}
