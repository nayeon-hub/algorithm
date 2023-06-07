function solution(k, score) {
  let honor = [];
  return score.map((el, idx) => {
    honor.push(el);
    honor.sort((a, b) => b - a);
    honor = honor.slice(0, k);
    return honor[honor.length - 1];
  });
}
