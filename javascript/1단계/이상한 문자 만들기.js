function solution(s) {
  let answer = s
    .split(' ')
    .map((ele) =>
      ele
        .split('')
        .map((el, idx) => {
          if (idx % 2 === 0) return el.toUpperCase();
          return el.toLowerCase();
        })
        .join('')
    )
    .join(' ');

  return answer;
}
