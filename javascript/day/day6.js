// LV0 수열과 구간 쿼리 4
function solution(arr, queries) {
  let answer = [...arr];
  for (let [s, e, k] of queries) {
    arr.forEach((_, idx) => {
      if (s <= idx && idx <= e) {
        if (idx % k === 0) answer[idx] += 1;
      }
    });
  }
  return answer;
}

// LV0 리스트 자르기
function solution(n, slicer, num_list) {
  let [a, b, c] = slicer;
  let answer = [];
  switch (n) {
    case 1:
      answer = num_list.slice(0, b + 1);
      break;
    case 2:
      answer = num_list.slice(a);
      break;
    case 3:
      answer = num_list.slice(a, b + 1);
      break;
    case 4:
      let arr = num_list.slice(a, b + 1);
      for (let i = 0; i < arr.length; i += c) {
        answer.push(arr[i]);
      }
    default:
      break;
  }
  return answer;
}

// 다른 풀이

// for문의 범위 : a ~ b 까지
for (let i = a; i <= b; i += c) {
  answer.push(nums[i]);
}

// switch문의 return
// !(idx % c)
num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));

// LV0 qrcode
function solution(q, r, code) {
  return [...code].filter((_, idx) => idx % q === r).join('');
}
