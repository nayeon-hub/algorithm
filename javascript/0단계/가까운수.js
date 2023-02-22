// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  let arr = array.sort((a, b) => a - b);

  let minArr = arr.filter((el) => el <= n);
  let min = minArr.length === 0 ? arr[0] : minArr[minArr.length - 1];

  let maxArr = arr.filter((el) => el >= n);
  let max = maxArr.length === 0 ? arr[arr.length - 1] : maxArr[0];

  if (Math.abs(n - min) > Math.abs(max - n)) {
    return max;
  } else {
    return min;
  }
}

// test case
// array = [3,4,10,12,13], n = 11, answer = 10 크기가 비슷할 경우 더 작은 수를 선택
// array = [10, 3, 28],	n= 20,	answer = 28 정렬되지 않은 array

// 다른 코드 풀이
function solution(array, n) {
  return array.reduce(
    (
      a,
      c // reduce 응용
    ) =>
      Math.abs(a - n) < Math.abs(c - n)
        ? a
        : Math.abs(a - n) === Math.abs(c - n)
        ? Math.min(a, c)
        : c
  );
}
