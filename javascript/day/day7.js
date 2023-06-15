// LV0 커피 심부름
function solution(order) {
  return order.reduce((acc, cur) => {
    if (cur.includes('cafelatte')) {
      return acc + 5000;
    } else {
      return acc + 4500;
    }
  }, 0);
}

// LV0 문자열 묶기
function solution(strArr) {
  let obj = {};
  strArr.forEach((el) =>
    obj[el.length] ? obj[el.length]++ : (obj[el.length] = 1)
  );
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][1];
}

// 다른 사람 풀이
function solution(strArr) {
  let ans = Array(31).fill(0);
  for (let s of strArr) ans[s.length]++;
  return Math.max(...ans);
} // object 대신 index 사용하기

// LV0 문자 개수 세기
function solution(my_string) {
  var answer = Array(52).fill(0);
  [...my_string].forEach((el, idx) => {
    let num = el.charCodeAt();
    if (num < 97) {
      answer[num - 65] += 1;
    } else {
      answer[num - 71] += 1;
    }
  });
  return answer;
}

// 다른 사람 풀이
function solution(m) {
  let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let a = new Array(52).fill(0);

  m.split('').map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}

// LV0 배열 만들기 4
function solution(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length > 0) {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i += 1;
      } else {
        stk.pop();
      }
    } else {
      stk.push(arr[i]);
      i += 1;
    }
  }
  return stk;
}

// LV0 2의 영역
function solution(arr) {
  let firstIdx = arr.indexOf(2);
  let lastIdx = arr.lastIndexOf(2);
  return lastIdx >= 0 ? arr.slice(firstIdx, lastIdx + 1) : [-1];
}
