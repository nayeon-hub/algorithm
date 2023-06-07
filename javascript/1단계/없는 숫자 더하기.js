function solution(numbers) {
  let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.forEach((el) => {
    if (a.indexOf(el) >= 0) {
      a.splice(a.indexOf(el), 1);
    }
  });

  return a.reduce((acc, cur) => acc + cur, 0);
}

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
