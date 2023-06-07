function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  answer.push(numer1 * denom2 + numer2 * denom1);
  answer.push(denom1 * denom2);

  let max = Math.max(...answer);
  let min = Math.min(...answer);
  let gcd = 1;

  for (let i = 2; i <= min; i++) {
    if (max % i === 0 && min % i === 0) {
      gcd = i;
    }
  }

  return [answer[0] / gcd, answer[1] / gcd];
}

// 다른 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수 - 유클리드 알고리즘

  return [denum / gcd, num / gcd];
}
