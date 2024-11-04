// bfs
function solution(rectangle, characterX, characterY, itemX, itemY) {
    const newRect = Array.from({length : 102}, () => new Array(102).fill(0));
    const visited = Array.from({length : 102}, () => new Array(102).fill(0));
    
    for (let i = 0; i < rectangle.length; i++) {
        const [lx, ly, rx, ry] = rectangle[i].map(el => el * 2);
        
        for (let x = lx; x <= rx; x++) {
            for (let y = ly; y <= ry; y++) {
                if (x === lx || x === rx || y === ly || y === ry) {
                    if (newRect[x][y] < 2) newRect[x][y] = 1;
                } else {
                    newRect[x][y] = 2;
                }
            }
        }  
    }
    
    function bfs(x, y) {
        const queue = [];
        queue.push([x,y]);
        visited[x][y] = 1;
        
        const dx = [-1, 0, 1, 0];
        const dy = [0, -1, 0, 1];
        
        while (queue.length) {
            const [currX, currY] = queue.shift();
            for (let i = 0; i < 4; i++) {
                const nextX = currX + dx[i];
                const nextY = currY + dy[i];
                if (nextX >= 0 && nextY >= 0 && nextX < newRect[0].length && nextY < newRect.length) {
                    if (!visited[nextX][nextY] && newRect[nextX][nextY] === 1) {
                        queue.push([nextX, nextY]);
                        visited[nextX][nextY] = visited[currX][currY] + 1;
                    }
                }
            }
        }
    }
    
    
    bfs(characterX * 2, characterY * 2);
    
    return Math.abs(visited[characterX * 2][characterY * 2] - visited[itemX * 2][itemY * 2]) / 2;
}
