function solution(wallpaper) {
  let shopArr = [];
  wallpaper.forEach((row, rIdx) => {
    row.split('').forEach((item, iIdx) => {
      if (item === '#') {
        shopArr.push([rIdx, iIdx]);
      }
    });
  });

  let a = [...shopArr].sort((a, b) => a - b);
  let b = [...shopArr].sort((a, b) => a[1] - b[1]);

  return [a[0][0], b[0][1], a[a.length - 1][0] + 1, b[b.length - 1][1] + 1];
}
