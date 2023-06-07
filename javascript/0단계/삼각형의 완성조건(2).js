function solution(sides) {
  let count = 0;
  const max = Math.max(...sides);
  const min = Math.min(...sides);
  // 만약 기존 요소 중 가장 긴 변이 있다면
  for (let i = max - min + 1; i <= max; i++) {
    count++;
  }
  // 나머지 한 변이 가장 긴 변인 경우
  for (let i = max + 1; i < max + min; i++) {
    count++;
  }
  return count;
}

// point! x에 대한 정확한 범위

// 1) [min1, min2] = sides
// x < min1 + min2 , min < min2
// x의 범위 : min2 < x && x < min + max

// 2) [min, max] = sides
// max < min + x
// x의 범위 : max - min < x && x < max
