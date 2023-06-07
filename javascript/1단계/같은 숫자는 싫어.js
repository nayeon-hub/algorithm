function solution(arr) {
  let stk = [];

  arr.forEach((el) => {
    stk.push(el);

    if (stk.length >= 2) {
      let a = stk.slice(-2)[0];
      let b = stk.slice(-2)[1];
      if (a === b) {
        stk.pop();
      }
    }
  });

  return stk;
} // 시간초과

function solution(arr) {
  return arr.filter((el, idx) => el !== arr[idx + 1]);
}
