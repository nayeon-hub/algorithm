function solution(phone_number) {
  let len = phone_number.length - 4;
  let answer = '*'.repeat(len) + phone_number.slice(-4);
  return answer;
}
