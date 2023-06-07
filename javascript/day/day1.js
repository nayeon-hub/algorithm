// LV0 특별한 이차원 배열 2

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}

// LV0 특별한 이차원 배열 1
function solution(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let newArr = new Array(n).fill(0);
    newArr[i] = 1;
    arr.push(newArr);
  }
  return arr;
}

//LV0 배열 만들기 5
function solution(intStrs, k, s, l) {
  var answer = [];
  for (let str of intStrs) {
    let preNum = str.slice(s, s + l);
    if (parseInt(preNum) > k) {
      answer.push(parseInt(preNum));
    }
  }
  return answer;
}
