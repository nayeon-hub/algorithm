// 타겟넘버(DFS)
function solution(numbers, target) {
    let answer = 0;
    
    getTarget(0, 0)
    
    function getTarget(idx, sum) {
        if (idx < numbers.length) {
            getTarget(idx + 1, sum + numbers[idx]);
            getTarget(idx + 1, sum - numbers[idx]);
        } else {
            if (sum === target) {
               answer++; 
            }
            
            return;
        }
    }
    
    return answer;
}

// 네트워크(DFS)
function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let networks = 0;
    
    function DFS(idx) {
        visited[idx] = true;
        
        for (let j = 0; j < computers[idx].length; j++) {
            if (!visited[j] && computers[idx][j]) {
                DFS(j);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            networks++;
            DFS(i);
        }
    }
    
    return networks;
}
