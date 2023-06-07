function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)];
    if (aGab === bGab) return b - a;
    return aGab - bGab;
  });
}

// sort
// 1. return value < 0 a가 b보다 앞에
// 2. return value = 0 a,b 위치 안바뀜
// 3. return value > 0 b가 a보다 앞에
