// 그리디 - 체육복

function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    let realLostIdx = realLost.length - 1;
    let realReserveIdx = realReserve.length - 1;
    let answer = n - realLost.length;
    
    while (realLostIdx >= 0) {
        if (realReserveIdx < 0) break; 
        
        if (realLost[realLostIdx] === realReserve[realReserveIdx] - 1 || realLost[realLostIdx] === realReserve[realReserveIdx] + 1) {
            answer++;
            realLostIdx--;
            realReserveIdx--;
        } else {
            if (realLost[realLostIdx] > realReserve[realReserveIdx]) realLostIdx--;
            else realReserveIdx--;
        }
    }
    
    return answer;
}
