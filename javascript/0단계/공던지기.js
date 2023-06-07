function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}
// k의 범위 0 < k < 1000
// k = 1부터 2k - 1
// k = 0부터 2k - 2
