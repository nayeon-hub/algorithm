// 정렬 - 가장 큰 수 
function solution(numbers) {
    const answer = numbers.sort((a,b) => (b.toString() + a.toString()) - (a.toString() + b.toString())).join("");
    return answer[0] === "0" ? "0" : answer;
}       

// 정렬 - K번째 수
function solution(array, commands) {
    const answer = [];
    for (const [i, j, k] of commands) {
        answer.push(array.slice(i - 1, j).sort((a,b) => a - b)[k - 1]);
    }
    return answer;
}
