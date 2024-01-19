// 기능 개발

function solution(progresses, speeds) {
  let answer = [];
  let days = 0;

  for (let i = 0; i <= progresses.length - 1; i++) {
    let howDay = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (days < howDay) {
      answer.push(1);
      days = howDay;
    } else {
      answer[answer.length - 1] += 1;
    }
  }

  return answer;
}

// 모의고사
// Math.max 복습
function solution(answers) {
  let mathManOne = [1, 2, 3, 4, 5];
  let mathManTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  let mathManThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = { 1: 0, 2: 0, 3: 0 };
  let answerLength = answers.length;

  for (let i = 0; i <= answerLength - 1; i++) {
    if (answers[i] === mathManOne[i % mathManOne.length]) {
      result[1] += 1;
    }
    if (answers[i] === mathManTwo[i % mathManTwo.length]) {
      result[2] += 1;
    }
    if (answers[i] === mathManThree[i % mathManThree.length]) {
      result[3] += 1;
    }
  }

  let arr = Object.entries(result).sort((a, b) => b[1] - a[1]);
  return arr.filter((el) => el[1] >= arr[0][1]).map((el) => parseInt(el[0]));
}
