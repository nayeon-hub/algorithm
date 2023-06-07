function solution(cards1, cards2, goal) {
  for (const g of goal) {
    if (cards1[0] == g) {
      cards1 = cards1.slice(1);
    } else if (cards2[0] == g) {
      cards2 = cards2.slice(1);
    } else {
      return 'No';
    }
  }
  return 'Yes';
}

//카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다!

function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return 'No';
    }
    console.log(cards1, cards2);
  }

  return 'Yes';
}
