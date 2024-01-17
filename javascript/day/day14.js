// [1차] 캐시
function solution(cacheSize, cities) {
  let answer = 0;
  let arr = [];

  for (let city of cities) {
    city = city.toLowerCase();
    let checkedCityIndex = arr.indexOf(city);

    if (checkedCityIndex > -1) {
      answer += 1;
    } else {
      answer += 5;
    }

    if (arr.length >= cacheSize) {
      if (checkedCityIndex > -1)
        arr = [
          ...arr.slice(0, checkedCityIndex),
          ...arr.slice(checkedCityIndex + 1, arr.length),
        ];
      else arr = [...arr.slice(1, arr.length)];
    }

    if (cacheSize > 0) arr.push(city);
  }

  return answer;
}
