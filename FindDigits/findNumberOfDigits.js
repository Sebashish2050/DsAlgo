const NUMBER = 1;
const getDigits = (number) => {
  let count = 0;
  if(!isNaN(parseInt(number, 10))) {
    while(number !== 0) {
      number = Math.floor(number / 10);
      ++count;
    }
  }
  return count
}

console.log(getDigits(NUMBER));