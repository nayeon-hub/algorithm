// LV0 빈 배열에 추가, 삭제하기
function solution(arr, flag) {
  let X = [];
  flag.forEach((el, idx) => {
    if (el) {
      for (let i = 0; i < arr[idx] * 2; i++) {
        X.push(arr[idx]);
      }
    } else {
      for (let i = 0; i < arr[idx]; i++) {
        X.pop();
      }
    }
  });
  return X;
}

// LV0 문자열이 몇 번 등장하는지 세기
function solution(myString, pat) {
  let n = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      n += 1;
    }
  }
  return n;
}

// LV0 글자 지우기
function solution(my_string, indices) {
  return [...my_string].filter((el, idx) => !indices.includes(idx)).join('');
}
