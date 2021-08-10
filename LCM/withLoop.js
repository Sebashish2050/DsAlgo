// time complexity O(n);
const findLCM = (a, b) => {
  let max = Math.max(a, b);
  while(true) {
    if(max % a === 0 && max % b === 0) {
      break;
    }
    max++;
  }

  return max;
}

console.log(findLCM(10, 4));