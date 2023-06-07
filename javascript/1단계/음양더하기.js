function solution(absolutes, signs) {
  let sum = absolutes.reduce((acc, cur, idx) => {
    if (signs[idx]) return acc + cur;
    return acc + cur * -1;
  }, 0);

  return sum;
}
