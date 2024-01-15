// 연속 부분 수열 합의 개수
function solution(elements) {
  let answer = [];

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let newArr = elements.slice(j, j + i);
      let anotherArr = [];

      if (j + i > elements.length) {
        anotherArr = elements.slice(0, i - elements.length + j);
      }
      answer.push(
        [...newArr, ...anotherArr].reduce((acc, cur) => acc + cur, 0)
      );
    }
  }

  let newSet = new Set(answer);

  return [...newSet].length;
}

// 연속 부분 수열 합의 개수 - 다른 방법 : concat - 큐
// 첫번째 방법보다 시간 적게 걸림
function solution(elements) {
  let newSet = new Set();
  let circulator = elements.concat(elements);

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j <= elements.length - 1; j++) {
      newSet.add(
        circulator.slice(j, j + i).reduce((acc, cur) => acc + cur),
        0
      );
    }
  }

  return newSet.size;
}

// 괄호 회전하기 Lv2
function checkStack(s) {
  let stack = [];

  for (let str of s) {
    if (str === "]") {
      if (stack[stack.length - 1] !== "[") return false;
      else stack.pop();
    } else if (str === "}") {
      if (stack[stack.length - 1] !== "{") return false;
      else stack.pop();
    } else if (str === ")") {
      if (stack[stack.length - 1] !== "(") return false;
      else stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack.length > 0 ? false : true;
}

function solution(s) {
  let answer = 0;
  let sStr = s;

  for (let i = 0; i < s.length; i++) {
    if (checkStack(sStr)) answer += 1;

    let sOne = sStr.slice(1);
    let sTwo = sStr.slice(0, 1);

    sStr = sOne + sTwo;
  }

  return answer;
}

// 괄호 회전하기 다른 방법
function checkStr(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "]") {
      if (stack[stack.length - 1] !== "[") return false;
      else stack.pop();
    } else if (str[i] === ")") {
      if (stack[stack.length - 1] !== "(") return false;
      else stack.pop();
    } else if (str[i] === "}") {
      if (stack[stack.length - 1] !== "{") return false;
      else stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack.length > 0 ? false : true;
}

function solution(s) {
  let answer = 0;
  let concatedS = s + s;
  for (let i = 0; i <= s.length - 1; i++) {
    if (checkStr(concatedS.slice(i, s.length + i))) answer++;
  }

  return answer;
}
