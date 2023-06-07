function solution(n) {
  let x3 = 0;
  for (let i = 1; i <= n; i++) {
    x3++;
    while (x3.toString().includes('3') || x3 % 3 === 0) {
      x3++;
    }
  }
  return x3;
}

// 다른 풀이
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      n++;
    }
    if (String(i).includes('3') & (i % 3 != 0)) {
      n++;
    }
  }
  return n;
}
