// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요

function solution(num, total) {
  let AL = (total * 2) / num; // 첫 항 + 끝 항 : 등차수열
  let min = AL;
  let max;
  while (true) {
    max = AL - min;
    if (max - min === num - 1) break;
    min -= 1;
  }
  return new Array(num).fill(0).map((el, idx) => min + idx); // fill, new Array, idx
}
