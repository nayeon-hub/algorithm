// 2022 KAKAO BLIND RECRUITMENT
// 단순 구현 문제?

function feeCalculator(inTime, outTime) {
  const [outTimeHour, outTimeMinute] = outTime.split(":");
  const [inTimeHour, inTimeMinute] = inTime.split(":");
  const outTimeH = parseInt(outTimeHour);
  const outTimeM = parseInt(outTimeMinute);
  const inTimeH = parseInt(inTimeHour);
  const inTimeM = parseInt(inTimeMinute);

  if (outTimeM > inTimeM) {
    return (outTimeH - inTimeH - 1) * 60 + (60 + outTimeM - inTimeM);
  } else {
    return (outTimeH - inTimeH) * 60 + (outTimeM - inTimeM);
  }
}

function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  let result = {};
  let numRecords = {};

  for (let i = 0; i < records.length; i++) {
    const [time, number, state] = records[i].split(" ");
    if (numRecords[number]) numRecords[number].push([time, number, state]);
    else numRecords[number] = [[time, number, state]];
  }

  for (let numRecord in numRecords) {
    const numRecordItem = numRecords[numRecord];
    let startTime = "0:00";
    for (let j = 0; j < numRecordItem.length; j++) {
      const [time, number, state] = numRecordItem[j];
      if (state === "IN") {
        startTime = time;
        if (j === numRecordItem.length - 1) {
          const fee = feeCalculator(startTime, "23:59");
          if (result[number]) result[number] += fee;
          else result[number] = fee;
        }
      } else {
        const fee = feeCalculator(startTime, time);
        if (result[number]) result[number] += fee;
        else result[number] = fee;
      }
    }
  }

  return Object.entries(result)
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .map(([key, value]) =>
      value > basicTime
        ? basicFee + Math.ceil((value - basicTime) / unitTime) * unitFee
        : basicFee
    );
}
