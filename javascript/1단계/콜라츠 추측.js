function solution(num) {
  let repeatNum = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    if (repeatNum >= 500) {
      break;
    }
    repeatNum += 1;
  }
  return num === 1 ? repeatNum : -1;
}
