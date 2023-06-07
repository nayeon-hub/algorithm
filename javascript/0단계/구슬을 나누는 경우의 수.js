function Factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}

function Factorial(n) {
  if (n < 1) return 1;
  return n * Factorial(n - 1);
}

function solution(balls, share) {
  let nFac = Factorial(balls);
  let nmFac = Factorial(balls - share);
  let mFac = Factorial(share);
  let answer = nFac / (nmFac * mFac);

  return Math.round(answer);
}
