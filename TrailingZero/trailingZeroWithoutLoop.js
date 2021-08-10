// Time complexity O(log(number));
const findTrailingZero = number => {
  let count = 0;
  for(let i = 5; i<= number; i = i*5) {
    count = count + number/i;
  }

  return count;
}

console.log(findTrailingZero(100))