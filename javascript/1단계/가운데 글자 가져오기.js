function solution(s) {
  let idx = parseInt(s.length / 2);
  return s.length % 2 === 0 ? s.slice(idx - 1, idx + 1) : s.slice(idx, idx + 1);
}

function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
