function solution(s) {
  let result = 0;
  let sArr = [...s];
  let init = sArr[0];
  let checkObj = { same: 0, differ: 0 };

  sArr.forEach((el, idx) => {
    if (checkObj['same'] === checkObj['differ']) {
      checkObj['same'] = 0;
      checkObj['differ'] = 0;
      result += 1;
      init = sArr[idx + 1];
    }

    if (init === el) {
      checkObj['same'] += 1;
    } else {
      checkObj['differ'] += 1;
    }
  });

  return result;
}

function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}
