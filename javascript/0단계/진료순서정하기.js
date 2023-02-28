// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
  let originEmer = [...emergency];
  let sortedEmer = emergency.sort((a, b) => b - a);
  var answer = [];
  for (const emer of originEmer) {
    answer.push(sortedEmer.indexOf(emer) + 1);
  }
  return answer;
}

// 다른 코드 풀이
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  // slice를 사용해서 원본변경막음
  // sort 결과값 : 정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.
  return emergency.map((v) => sorted.indexOf(v) + 1);
  // map을 사용해서 변수선언 없이 객체반환되게
}

// 위에 코드 적용
function solution(emergency) {
  let sortedEmer = [...emergency].sort((a, b) => b - a);
  var answer = [];
  for (const emer of emergency) {
    answer.push(sortedEmer.indexOf(emer) + 1);
  }
  return answer;
}
