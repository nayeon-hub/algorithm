function solution(ingredient) {
  let stk = [];
  let cnt = 0;
  ingredient.forEach((el) => {
    stk.push(el);
    if (stk.length >= 4) {
      const find = stk.slice(-4).join('');
      if (find === '1231') {
        stk.pop();
        stk.pop();
        stk.pop();
        stk.pop();
        cnt++;
      }
    }
  });
  return cnt;
}
