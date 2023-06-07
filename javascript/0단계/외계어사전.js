function solution(spell, dic) {
  let dicDb = dic.map((el) => {
    let strArr = el.split('').sort().join('');
    return strArr;
  });
  let spellStr = spell.sort().join('');
  if (dicDb.includes(spellStr)) {
    return 1;
  }
  return 2;
}

// 다른 풀이

function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
// array.prototype.some()
// some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다. 만약 배열에서 주어진 함수가 true을 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다. 이 메서드는 배열을 변경하지 않습니다.
