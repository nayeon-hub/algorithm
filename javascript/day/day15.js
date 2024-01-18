// 튜플
// {}, []을 JSON.parse하기....!!
function solution(s) {
  const result = [];
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );

  arr.forEach((el) => {
    el.forEach((str) => {
      let num = parseInt(str);

      if (result.includes(num)) return;
      else result.push(num);
    });
  });

  return result;
}

// 의상
// 경우의 수 : (해당 부위의 옷 개수 n(착용하는 경우의 수) + 1(착용하지 않는 경우)) * 옷 타입 개수만큼 누적 계산 : 경우의 수 곱 법칙 -1(모두 착용하지 않는 경우)
// Map으로도 해결 가능 - 소요시간 더 적게 든다.
function solution(clothes) {
  let answer = 1;
  const clothesObj = {};

  clothes.forEach((el) => {
    const [name, type] = el;
    if (clothesObj[type]) clothesObj[type] += 1;
    else clothesObj[type] = 1;
  });

  Object.values(clothesObj).forEach((el) => (answer *= el + 1));

  return answer - 1;
}
