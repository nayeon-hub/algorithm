function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);
  let fre = parseInt(score.length / m);

  for (let i = 0; i < fre; i++) {
    let valArr = score.slice(i * m, i * m + m);
    valArr.sort();
    let val = valArr[0] * m;
    result += val;
  }

  return result;
}

function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
