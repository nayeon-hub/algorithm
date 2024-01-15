// H-index
function solution(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;

  while (h + 1 <= citations[h]) {
    h += 1;
  }

  return h;
}

// 2016
function solution(a, b) {
  const dayObj = {
    1: "FRI",
    2: "SAT",
    3: "SUN",
    4: "MON",
    5: "TUE",
    6: "WED",
    0: "THU",
  };
  const monObj = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  let dateSum = 0;

  for (let m = 1; m < a; m++) {
    dateSum += monObj[m];
  }

  dateSum += b;

  return dayObj[dateSum % 7];
}
