// 단어 변환 DFS - 복습

/* 로직 정리
1. 방문 여부
input : words.length
logic : 각 index마다 false값을 가진 words.length 크기의 visited array 
output : vistied array

2. 유효성 검사
input : 바로 직전에 탐색한 단어, 탐색하게될 단어
logic : 현재 탐색하게 될 단어의 방문여부, 탐색하게 될 단어와 비로 직전에 탐색한 단어를 비교했을 때 알파벳 하나만 다른지 확인여부
output : true or false

3. 카운트 저장
input : 바로 직전에 탐색한 단어, target, answer
logic : 단어와 target이 같은 경우 카운트를 answer에 저장, 그리고 리턴
ouput : 없음

4. 현재 단어와 연결된 다른 단어 탐색
input : preWord, words, count
logic : words를 가지고  for문을 돌리면서 유효성 검사를 함, 유효한 값은 다시 다른 단어 탐색으로 넘어감 
output : 없음
*/

function solution(begin, target, words) {
    const visited = new Array(target.length).fill(false);
    const answer = [];
    
    function dfs(prevWord, count) {
        
        if (prevWord === target) {
            answer.push(count);
            return;
        }
        
        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && [...words[i]].filter((w, idx) => w !== prevWord[idx]).length === 1) {
                visited[i] = true;
                dfs(words[i], count + 1);
                visited[i] = false;
            }
        }
        
    }

    dfs(begin, 0);
    
    return answer.length > 0 ? Math.min(...answer) : 0;
}

// 게임 맵 최단거리 BFS - 복습
/*
1. 방문 처리
input : maps
output : visited

2. 방향벡터
input : 없음
ouput : dx, dy

3. 유효성 검사
input : nextX, nextY, maps
logic : nextX,nextY가 maps 범위를 벗어나는지 유효성 검사
ouput : true or false

4. bfs
input : startX, startY
ouput : 없음

5. vistied 방문여부와 함께 최단거리
input : visited, startX, startY, nextX, nextY
output : 없음
*/

function solution(maps) {
    const visited = Array.from({length : maps.length}, () => new Array(maps[0].length).fill(0));
    
    const vectorX = [0, -1, 1, 0];
    const vectorY = [-1, 0, 0, 1];
    
    function bfs(startX, startY) {
        const queue = [];
        queue.push([startX, startY]);
        visited[startX][startY] = 1;
        
        while (queue.length) {
            const [currX, currY] = queue.shift();
            
            for (let i = 0; i < 4; i++) {
                const nextX = currX + vectorX[i];
                const nextY = currY + vectorY[i];
                
                if (nextX >= 0 && nextX < maps.length && nextY >= 0 && nextY < maps[0].length) {
                    if (visited[nextX][nextY] === 0 && maps[nextX][nextY] !== 0) {
                        queue.push([nextX, nextY]);
                        visited[nextX][nextY] = visited[currX][currY] + 1
                    }
                }
            }
        }
    }
    
    bfs(0, 0);
                               
    return visited[maps.length - 1][maps[0].length - 1] ? visited[maps.length - 1][maps[0].length - 1] : -1;
}
