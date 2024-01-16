// 행렬의 곱셈
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    answer[i] = [];
    for (let j = 0; j <= arr2[0].length - 1; j++) {
      answer[i].push(
        arr1[i].reduce((acc, cur, idx) => acc + cur * arr2[idx][j], 0)
      );
    }
  }

  return answer;
}

// 포켓몬
function solution(nums) {
  const newSet = new Set(nums);
  const takenN = nums.length / 2;
  if (newSet.size - takenN >= 0) return takenN;
  return newSet.size;
}
