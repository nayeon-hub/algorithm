function solution(tickets) {
  let answer = [];
  const result = [];
  const len = tickets.length;
  const visited = new Array(len).fill(false);
  
  tickets.sort();
    
  const dfs = (str, count) => {
    result.push(str);
    
    if(count === len) {
      answer = result;
      return true;
    }
    
    for(let i = 0; i < len; i++) {
      if(!visited[i] && tickets[i][0] === str) {
        visited[i] = true;
        
        if(dfs(tickets[i][1], count+1)) return true;
        
        visited[i] = false;
      }
    }
    
    result.pop();
    
    return false;
  }
  
  dfs("ICN", 0);
  
  return answer;
}
