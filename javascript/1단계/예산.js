function solution(d, budget) {
  let result = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      result += 1;
      budget -= d[i];
    } else {
      return result;
    }
  }

  return result;
}
