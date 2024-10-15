// 최소직사각형(완전탐색
function solution(sizes) {
    const sortedSize = sizes.map((size) => {
        const [w, h] = size;
        if (w > h) return [w, h];
        else return [h, w];
    })    
    
    const maxW = sortedSize.sort((sizeA, sizeB) => sizeB[0] - sizeA[0])[0][0];
    const maxH = sortedSize.sort((sizeA, sizeB) => sizeB[1] - sizeA[1])[0][1];
    
    return maxW * maxH;
}

// 모의고사(완저탐색)
function solution(answers) {
    const aMath = [1,2,3,4,5];
    const bMath = [2,1,2,3,2,4,2,5];
    const cMath = [3,3,1,1,2,2,4,4,5,5];
    const answerResult = [0, 0, 0];
    const answer = [];
    
    for (let i = 0; i < answers.length; i++) {
            if (aMath[i % aMath.length] === answers[i]) answerResult[0]++;
            if (bMath[i % bMath.length] === answers[i]) answerResult[1]++;
            if (cMath[i % cMath.length] === answers[i]) answerResult[2]++;
        
    }

    const maxAnswer = Math.max(...answerResult);

    for (let i = 0; i < answerResult.length; i++) {
        if (answerResult[i] === maxAnswer) answer.push(i + 1);
    }

    return answer;
}
