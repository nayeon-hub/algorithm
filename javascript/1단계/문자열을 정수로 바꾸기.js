function solution(s) {
  let check = s.indexOf('-');

  if (check !== -1) {
    return parseInt(s.slice(1)) * -1;
  }

  return parseInt(s);
}
