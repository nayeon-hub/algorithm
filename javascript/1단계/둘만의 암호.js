const solution = (s, skip, index) => {
  let answer = '';
  let matched = 'abcdefghijklmnopqrstuvwxyz'.match(
    new RegExp(`[^${skip}]`, 'g')
  ); //빼고나서

  for (const value of s) {
    let newIdx = matched.indexOf(value) + index;
    answer += matched[newIdx % matched.length];
  } // index 계산
  return answer;
};
