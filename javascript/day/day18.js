// 피로도 - dfs문제
function dfs(dungeons, visited, answer, k, depth) {
  answer.push(depth);
  for (let i = 0; i <= dungeons.length - 1; i++) {
    if (!visited[i] && dungeons[i][0] <= k) {
      visited[i] = true;
      dfs(dungeons, visited, answer, k - dungeons[i][1], depth + 1);
      visited[i] = false;
    }
  }
}

function solution(k, dungeons) {
  let answer = [];
  let visited = new Array(dungeons.length).fill(false);

  dfs(dungeons, visited, answer, k, 0);

  return Math.max(...answer);
}

// 소수찾기 - 소수 구하기 공식 사용
function solution(n) {
  let arr = Array.from({ length: n }, (v, i) => i + 1);
  let start = 2;

  while (start <= Math.sqrt(n)) {
    for (let i = 2; start * i <= n; i++) {
      arr[i * start - 1] = null;
    }
    start += 1;
  }

  return arr.filter((el) => el).length - 1;
}
