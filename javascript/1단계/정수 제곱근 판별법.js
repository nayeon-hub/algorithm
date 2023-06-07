function solution(n) {
  let checkNum = Math.sqrt(n);

  if (Number.isInteger(checkNum)) {
    return (checkNum + 1) ** 2;
  }

  return -1;
}
