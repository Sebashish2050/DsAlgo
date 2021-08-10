// Time complexity O(number);
const findTrailingZero = number => {
  if(number === 0) return 1;
  let fact = 1;
  while(number > 0) {
    fact = fact * number--
  }
  let count = 0;
  while(fact % 10 === 0) {
    count++;
    fact = Math.floor(fact/10);
  }

  return count;
}

console.log(findTrailingZero(20))