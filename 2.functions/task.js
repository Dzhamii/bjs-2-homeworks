function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i])
    max = Math.max(max, arr[i])
    sum += arr[i];
}
  avg = +(sum / arr.length).toFixed(2)


  return { min: min, max: max, avg: Number(avg) };
}

console.log(getArrayParams([-99, 99, 10]))



function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let sumEvenElement = 0;
    let countEvenElement = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
  
    const average = sumEvenElement / countEvenElement;
  
    return average;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(summElementsWorker(...numbers)); 
  console.log(differenceMaxMinWorker(...numbers)); 
  console.log(differenceEvenOddWorker(...numbers)); 
  console.log(averageEvenElementsWorker(...numbers)); 
}

function makeWork (arrOfArr, func) {

}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker)); 
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));