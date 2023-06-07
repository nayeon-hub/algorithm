function solution(n) {
  let max = n - 1;
  let arr = [];
  for (let i = 1; i <= parseInt(Math.sqrt(max)); i++) {
    if (max % i === 0 && max / i !== i) {
      arr.push(i);
      arr.push(max / i);
    } else if (max % i === 0 && max / i === i) {
      arr.push(i);
    }
  }
  arr.sort((a, b) => a - b);

  return arr[1];
}
