// H-Index 정렬
function solution(citations) {
    let midi = parseInt(citations.reduce((a,b) => a + b, 0) / citations.length);
    while (midi > 0) {
        const filteredlen = citations.filter(el => el >= midi).length;
        if (filteredlen >= midi) {
            break;  
        } else midi -= 1;
    }
    return midi;
}

function solution(citations) {
     citations.sort((a,b) => b - a);
     let i = 0;
    
     while(i + 1 <= citations[i]) {
         i++;
     }
    
     return i;
}
