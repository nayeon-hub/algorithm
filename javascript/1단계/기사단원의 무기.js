function solution(number, limit, power) {
  let realPower = [];

  for (let num = 1; num <= number; num++) {
    let p = 0;
    for (let i = 1; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        p += 2;
      }
    }

    if (Number.isInteger(Math.sqrt(num))) {
      p -= 1;
    }

    if (p > limit) {
      realPower.push(power);
    } else {
      realPower.push(p);
    }
  }

  return realPower.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}
