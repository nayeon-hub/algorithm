function solution(n) {
  let str = '수박';
  let answer =
    n % 2 === 0 ? str.repeat(n / 2) : str.repeat(parseInt(n / 2)) + '수';

  return answer;
}
