function solution(keymap, targets) {
  let answer = [];
  let obj = {};
  let targetSet = [...new Set(targets.join(''))];

  targetSet.forEach((v) => {
    keymap.forEach((value) => {
      if (!value.includes(v)) return;

      let idx = value.indexOf(v) + 1;

      if (!obj.hasOwnProperty(v)) {
        obj[v] = idx;
      } else {
        obj[v] = obj[v] > idx ? idx : obj[v];
      }
    });
  });

  targets.forEach((target, idx) => {
    answer[idx] = 0;
    target.split('').forEach((value) => {
      if (!obj.hasOwnProperty(value)) {
        answer[idx] = -1;
      } else if (answer[idx] === -1) {
        return;
      } else {
        answer[idx] += obj[value];
      }
    });
  });
  return answer;
}
