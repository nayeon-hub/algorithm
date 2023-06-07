function solution(n) {
  var answer = new Set();
  let num = 2;
  let share = n;
  while (share > 1) {
    if (share % num === 0) {
      share = share / num;
      answer.add(num);
    } else {
      num += 1;
    }
  }
  return [...answer];
}
