function solution(keyinput, board) {
  let keyInput = keyinput;
  let [width, height] = board;
  let answer = [0, 0];
  width = parseInt(width / 2);
  height = parseInt(height / 2);

  keyInput.forEach((el) => {
    switch (el) {
      case 'left':
        if (answer[0] === width * -1) return answer[0];
        return (answer[0] -= 1);
      case 'right':
        if (answer[0] === width) return answer[0];
        return (answer[0] += 1);
      case 'up':
        if (answer[1] === height) return answer[0];
        return (answer[1] += 1);
      case 'down':
        if (answer[1] === height * -1) return answer[0];
        return (answer[1] -= 1);
      default:
        console.log(el);
    }
  });

  return answer;
}
