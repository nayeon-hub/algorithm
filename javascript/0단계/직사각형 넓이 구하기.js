function solution(dots) {
  dots.sort();
  let [one, two, three, four] = dots;
  let width = Math.abs(one[1] - two[1]);
  let height = Math.abs(one[0] - three[0]);
  return width * height;
}

// 다른 풀이
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

// 가장 큰 x좌표 - 가장 작은 x좌표 , 가장 큰 y좌표 - 가장 작은 y좌표
