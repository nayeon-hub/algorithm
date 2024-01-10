// 배열 조각하기
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      arr = arr.slice(0, query[i] + 1);
    } else {
      arr = arr.slice(query[i]);
    }
  }

  return arr;
}

// 귤 고르기

function solution(k, tangerine) {
  tangerine.sort((a, b) => a - b);

  let tangArray = [];
  let answer = [];

  for (let i = 0; i <= tangerine.length - 1; i++) {
    if (
      tangArray[tangArray.length - 1] &&
      tangArray[tangArray.length - 1][0] === tangerine[i]
    ) {
      tangArray[tangArray.length - 1][1] += 1;
    } else {
      tangArray.push([tangerine[i], 1]);
    }
  }

  tangArray.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < tangArray.length; i++) {
    if (k <= 0) break;

    k -= tangArray[i][1];
    answer.push(tangArray[i]);
  }

  return answer.length;
}
