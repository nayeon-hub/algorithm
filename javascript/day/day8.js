// 수열과 구간 쿼리 2
function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const a = arr
      .slice(s, e + 1)
      .filter((el) => el > k)
      .sort((a, b) => a - b);
    return a.length ? a[0] : -1;
  });
}
