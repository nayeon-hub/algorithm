function solution(park, routes) {
  let prevPos = [0, 0];
  park.forEach((row, idx) => {
    let rowIdx = row.indexOf('S');
    if (rowIdx >= 0) {
      prevPos = [idx, rowIdx];
    }
  });
  const dist = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

  routes.forEach((route) => {
    const [post, range] = route.split(' ');
    let curPos = [...prevPos];
    let applyFlag = true;

    for (let i = 0; i < range; i++) {
      curPos[0] += dist[post][0];
      curPos[1] += dist[post][1];

      if (
        curPos[0] > park.length - 1 ||
        curPos[1] > park[0].length - 1 ||
        curPos[0] < 0 ||
        curPos[1] < 0
      ) {
        applyFlag = false;
        break;
      }

      if (park[curPos[0]][curPos[1]] === 'X') {
        applyFlag = false;
        break;
      }
    }

    if (applyFlag) prevPos = curPos;
  });
  return prevPos;
}

// 코드 진행 순서
// 1. S 출발선 설정 : prevPos
// 2. 방향 객체 값이 들어간 변수
// 3. 해당 명령에 따라 이동하기 curPos
// 4. check - 더하다가 범위 벗어나면 바로 break
// 5. check - 더하다가 X 만나면 바로 break
// 6. break 안만나면 prevPos = curpos
// 7. return prevPos
