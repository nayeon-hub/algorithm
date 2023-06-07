function solution(s) {
  let p = s.split('').filter((el) => el.match(/p/gi)).length;
  let y = s.split('').filter((el) => el.match(/y/gi)).length;

  return p === y ? true : false;
}

function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
