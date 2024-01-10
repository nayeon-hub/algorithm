// 수 조작하기 2

function solution(numLog) {
  let answer = "";
  let obj = { 1: "w", "-1": "s", 10: "d", "-10": "a" };

  for (let i = 0; i < numLog.length - 1; i++) {
    let key = numLog[i + 1] - numLog[i]; // 자동 형 변환
    //   let key = (numLog[i + 1] - numLog[i]).toString();
    answer += obj[key];
  }

  return answer;
}

// ** 문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형 변환된다.

// 이차월 배열 대각선 순회하기
function solution(board, k) {
  let sum = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        sum += board[i][j];
      }
    }
  }
  return sum;
}

// 날짜 비교하기
function solution(date1, date2) {
  let sec1 = new Date(...date1);
  let sec2 = new Date(...date2);
  return sec1 < sec2 ? 1 : 0;
}

// 올바른 괄호 - 큐
// for < forEach < for in < for of 시간 연산
function solution(s) {
  let stack = [];
  // for < forEach < for of < for in

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    } else if (s[i] === "(") {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? true : false;
}

// 같은 숫자는 싫어 - 큐
function solution(s) {
  let stack = 0;

  for (let str of s) {
    if (str === ")") {
      if (stack <= 0) {
        return false;
      } else {
        stack -= 1;
      }
    } else if (str === "(") {
      stack += 1;
    }
  }

  return stack === 0 ? true : false;
}

function solution(arr) {
  let answer = [];

  arr.forEach((el) => {
    if (answer[answer.length - 1] === el) {
      return;
    } else {
      answer.push(el);
    }
  });

  return answer;
}
