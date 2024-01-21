// 프로세스
function solution(priorities, location) {
  let answer = 0;
  let prioritiesArr = priorities.map((el, idx) => [el, idx]);

  while (prioritiesArr.length > 0) {
    let value = prioritiesArr.shift();

    if (prioritiesArr.filter((el) => value[0] < el[0]).length > 0) {
      prioritiesArr.push(value);
    } else {
      answer += 1;
      if (value[1] === location) return answer;
    }
  }

  return answer;
}

// 소수 만들기 - 완전 탐색
function isPrimeNumber(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      for (let k = j + 1; k <= nums.length - 1; k++) {
        console.log(nums[i], nums[j], nums[k]);
        let num = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(num)) {
          answer++;
        }
      }
    }
  }

  return answer;
}
