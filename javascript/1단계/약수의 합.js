function solution(n) {
  let center = parseInt(Math.sqrt(n));
  let a = [];

  for (let i = 1; i <= center; i++) {
    if (n % i === 0 && n / i !== i) {
      a.push(i);
      a.push(n / i);
    } else if (n % i === 0 && n / i === i) {
      a.push(i);
    }
  }

  return a.reduce((arr, cur) => arr + cur, 0);
}
