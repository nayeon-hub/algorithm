// 할인 행사
// 복습시 flag로 구현해보기
function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 9; i++) {
    let wantObj = {};
    want.forEach((el, idx) => (wantObj[el] = number[idx]));

    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        if (wantObj[discount[j]] > 0) {
          wantObj[discount[j]] -= 1;
        } else {
          break;
        }
      } else {
        break;
      }
    }

    if (Object.values(wantObj).filter((el) => el !== 0).length === 0)
      answer += 1;
  }
  return answer;
}

// n^2 배열자르기
function solution(n, left, right) {
  let answer = [];

  while (left <= right) {
    answer.push(Math.max(Math.floor(left / n), left % n) + 1);
    left += 1;
  }

  return answer;
}
