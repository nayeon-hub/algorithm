process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let str = '';
  for (let i = 1; i <= b; i++) {
    str += `${'*'.repeat(a)}\n`;
  }
  console.log(str);
});
