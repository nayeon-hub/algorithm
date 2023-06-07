function solution(food) {
  let left = '';
  let setFood = food.map((el) => parseInt(el / 2));
  setFood.forEach((el, idx) => {
    for (let i = 0; i < el; i++) {
      left += `${idx}`;
    }
  });

  let right = left.split('').reverse().join('');

  return left + '0' + right;
}

function solution(food) {
  let res = '';
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + '0' + [...res].reverse().join('');
}
