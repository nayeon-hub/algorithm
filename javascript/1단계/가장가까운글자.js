function solution(s) {
  let result = [];
  let sArr = s.split('');

  sArr.forEach((el, idx) => {
    let sliceArr = sArr.slice(0, idx);

    sliceArr.reverse();
    let i = sliceArr.indexOf(el);

    if (i >= 0) {
      result.push(i + 1);
    } else {
      result.push(i);
    }
  });

  return result;
}

const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
