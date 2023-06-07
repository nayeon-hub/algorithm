function solution(s) {
  if (s.length === 4 || s.length === 6) {
    let regexp = /[A-Z]/gi;
    let checkArr = s.match(regexp);

    return checkArr ? false : true;
  }
  return false;
}
