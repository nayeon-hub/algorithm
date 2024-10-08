// 같은 숫자는 싫어
function solution(arr) {
    const stack = []; 
    
    for (let i = 0; i < arr.length; i++) {
        if (stack[stack.length - 1] !== arr[i]) {
            stack.push(arr[i]);
        }
    }
    
    return stack;  
}

// 기능 개발
function solution(progresses, speeds) {
    const completeDays = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
    const completeLimit = [completeDays[0]];
    const answer = [1];
    
    for (let i = 1; i < completeDays.length; i++) {
        if (completeLimit[completeLimit.length - 1] < completeDays[i]) {
            completeLimit.push(completeDays[i]);
            answer.push(1);
        } else {
            answer[answer.length - 1] += 1;
        }
    }
    return answer;
}

// 올바른 괄호 풀이 1
function solution(s){
    const opens = [];
    const stringArr = s.split("");
    
    for (let i = 0; i < stringArr.length; i++) {
        if (i === 0 && stringArr[i] === ")") return false;
        
        if (stringArr[i] === "(") opens.push(stringArr[i]);
        else {
            if (opens.length === 0) return false;
            else opens.pop(); 
        } 
    }
    
    if (opens.length > 0) return false;

    return true;
}

// 올바른 괄호 풀이 2
function solution(s) {
    let okay = 0;
    
    for (let string of s) {
        string === ")" ? okay -= 1 : okay += 1;
        if (okay < 0) return false;
    }
    
    return okay === 0 ? true : false;
}
