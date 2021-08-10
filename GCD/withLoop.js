// time complexity O(n);
const findGCD = (a, b) => {
  let min = Math.min(a, b);
  while(min > 0) {
    if(a % min === 0 && b % min === 0) {
      break;
    }
    min--;
  }

  return min;
}

console.log(findGCD(10, 15));