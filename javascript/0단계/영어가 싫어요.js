function solution(numbers) {
  let answer = numbers;
  let english = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < english.length; i++) {
    answer = answer.replaceAll(english[i], i); // replace 대신 replaceALl
  }
  return Number(answer);
}

function solution(numbers) {
  let answer = numbers;
  let english = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  for (let e in english) {
    answer = answer.replaceAll(e, english[e]);
  }
  return Number(answer);
}

// function solution(numbers) {
//   const strN = ["zero", "one", "two", "three", "four", "five",
//                  'six', "seven", "eight", "nine"]

//   strN.forEach((nums, index) => {
//     numbers = numbers.split(nums).join(index)})

//   return Number(numbers)
// }
