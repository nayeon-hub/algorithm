function solution(polynomial) {
  var answer = [];
  let a = 0;
  let b = 0;
  polynomial.split(' + ').forEach((el) => {
    if (el.includes('x')) {
      let num = el.split('');
      num.pop();
      if (num.length === 0) {
        a += 1;
      } else {
        a += parseInt(num.join(''));
      }
    } else {
      b += parseInt(el);
    }
  });

  if (a === 1) {
    answer.push('x');
  } else if (a !== 0) {
    answer.push(`${a}x`);
  }

  if (b !== 0) {
    answer.push(b);
  }

  return answer.join(' + ');
}

// 다른 풀이
function solution(polynomial) {
  const arr = polynomial.split(' + ');
  const xNum = arr
    .filter((n) => n.includes('x'))
    .map((n) => n.replace('x', '') || '1')
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? '' : xNum}x`);
  if (num) answer.push(num);

  return answer.join(' + ');
}
