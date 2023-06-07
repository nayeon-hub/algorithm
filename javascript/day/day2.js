// 수 조작하기 2

function solution(numLog) {
  let answer = '';
  let obj = { 1: 'w', '-1': 's', 10: 'd', '-10': 'a' };

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
