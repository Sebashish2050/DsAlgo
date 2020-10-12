const bubbleSort = (arr) => {
  if(!Array.isArray(arr) || arr.length === 0) {
    console.log('Please pass valid arguments of types array and integer');
  }

  const arrLen = arr.length;
  let temp = null;
  for(let i = 0; i<=arrLen; i++) {
    for(let j = 0; j <= arrLen-1-i; j++) {
      if(arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([10,5, 20, 15, 11, 10]));