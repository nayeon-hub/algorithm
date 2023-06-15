// 1. LV0 배열의 길이를 2의 거듭제곱으로 만들기
function solution(arr) {
  let l = arr.length;
  let n = 1;
  let num = 1;
  while (arr.length > num) {
    num = 2 ** n;
    n += 1;
  }
  let newArr = new Array(num - l).fill(0);

  return [...arr, ...newArr];
}

// 2. LV0 세 개의 구분자
// 제한 사항 : myStr의 길이 1,000,000
function solution(myStr) {
  let arr = myStr.split(/a|b|c/).filter((el) => el);
  return arr.length > 0 ? arr : ['EMPTY'];
}
// 💡다른 사람 풀이
// const solution=s=>s.match(/[^a-c]+/g)||['EMPTY']

// 3. LV0 조건에 맞게 수열 변환하기 2
// 제한 사항 arr의 길이 - 1,000,000
function solution(arr) {
  let arr1 = [...arr];
  let arr2 = [];
  let result = 0;

  while (1) {
    let arr2 = arr1.map((el) => {
      if (el >= 50 && el % 2 === 0) {
        return el / 2;
      } else if (el < 50 && el % 2 === 1) {
        return el * 2 + 1;
      } else {
        return el;
      }
    });

    let arr1Len = arr1.filter((el, idx) => arr2[idx] === el).length;
    let arr2Len = arr2.length;
    if (arr1Len === arr2Len) break;

    arr1 = [...arr2];
    result += 1;
  }
  return result;
}

// 💡다른 사람 풀이
function solution(arr, n = 0) {
  while (
    !arr.every((x) => (x >= 50 && x % 2 === 1) || (x < 50 && x % 2 === 0))
  ) {
    arr = arr.map((x) => {
      if (x >= 50 && x % 2 === 0) return x / 2;
      if (x < 50 && x % 2 === 1) return x * 2 + 1;
      return x;
    });
    n++;
  }
  return n;
}
// Array.prototype.every()
// every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다. - MDN 문서 중
