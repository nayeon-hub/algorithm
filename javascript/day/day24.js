// 피로도(완전탐색)

function solution(k, dungeons) {
    let answer = 0;
    const totalDungeon = dungeons.length;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(idx, currentXP, depth) {
        answer = Math.max(depth, answer);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && currentXP >= dungeons[i][0]) {
                visited[i] = true;
                dfs(i, currentXP - dungeons[i][1], depth + 1);
                visited[i] = false;  
            }
        }  
    } 
    
    dfs(0, k, 0)
    
    
    
    return answer;
}

// 카펫(완전탐색)
function solution(brown, yellow) {
    const x = yellow + 2;
    const y = parseInt((brown + yellow) / x);
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            const yellowX = i;
            const yellowY = yellow / i;
            
            if (brown === ((yellowX + yellowY) * 2 + 4)) {
                return [yellowY + 2, yellowX + 2];
            }
        }
    }
}
