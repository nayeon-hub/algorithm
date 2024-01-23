// [1차] 뉴스 클러스터링

function solution(str1, str2) {
  let str1Set = [];
  let str2Set = [];
  for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i].match(/[a-zA-Z]/) && str1[i + 1].match(/[a-zA-Z]/)) {
      str1Set.push((str1[i] + str1[i + 1]).toLowerCase());
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (str2[i].match(/[a-zA-Z]/) && str2[i + 1].match(/[a-zA-Z]/)) {
      str2Set.push((str2[i] + str2[i + 1]).toLowerCase());
    }
  }

  if (str1Set.length === 0 && str2Set.length === 0) return 1 * 65536;

  let min = 0;

  if (str1Set.length >= str2Set.length) {
    let checkSet = [...str2Set];
    str1Set.forEach((el) => {
      let idx = checkSet.indexOf(el);
      if (idx > -1) {
        checkSet.splice(idx, 1);
        min += 1;
      }
    });
  } else {
    let checkSet = [...str1Set];
    str2Set.forEach((el) => {
      let idx = checkSet.indexOf(el);
      if (idx > -1) {
        checkSet.splice(idx, 1);
        min += 1;
      }
    });
  }

  let max = str1Set.length + str2Set.length - min;

  return Math.floor((min / max) * 65536);
}
