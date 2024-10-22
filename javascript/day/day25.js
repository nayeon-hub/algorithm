// 전력망을 둘로 나누기 - 완전탐색 및 DFS
function solution(n, wires) {
    let answer = n - 1 - 1;
    let count = 0;
    
    const visited = new Array(n).fill(false);
    const graph = Array.from({length : n + 1}, () => []);
    
    for (let wire of wires) {
        graph[wire[0]].push(wire[1]);
        graph[wire[1]].push(wire[0]);
    }
    
    function dfs(node, banNode) {
        visited[node] = true;
        count++;
        
        for (let idx = 0; idx < graph[node].length; idx++) {
            const nextNode = graph[node][idx];
            if (!visited[nextNode]) {
                if (nextNode !== banNode) {
                    dfs(nextNode, banNode);
                }
            }
        }
        return count;
    }
    
    for (let [startNode, endNode] of wires) {
        
        const oneCount = dfs(startNode, endNode);
    
        count = 0;

        const anotherCount = dfs(endNode, startNode);
        
        count = 0;
        
        visited.fill(false);
        
        answer = Math.min(Math.abs(oneCount - anotherCount), answer);
    }
    
    return answer;
}

// 네트워크 - DFS
function solution(n, computers) {
    let count = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(node) {
        visited[node] = true;
        
        for (let i = 0; i < computers[node].length; i++) {
            if (!visited[i] && computers[node][i]) {
                dfs(i); 
            }
        }
        
        return;
    }
    
    for (let i = 0; i < computers.length; i++) {
        const computer = computers[i];
        if (!visited[i]) {
            count++;
            dfs(i);
        }
    }
    return count;
}
