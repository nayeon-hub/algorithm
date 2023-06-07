//아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

function solution(id_pw, db) {
  let result = 'fail';
  let [id, pw] = id_pw;
  for (const d of db) {
    if (d[0] === id && d[1] === pw) {
      // 아이디와 비밀번호 모두 일치
      result = 'login';
    } else if (d[0] === id && d[1] !== pw) {
      // 아이디는 일치, 비밀번호는 불일치
      result = 'wrong pw';
    } else if (d[0] !== id && d[1] !== pw) {
      // 아이디 불일치 d[0] !== id && d[1] === pw
      result = 'fail';
    }
  }
  return result;
}

// 다른 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
