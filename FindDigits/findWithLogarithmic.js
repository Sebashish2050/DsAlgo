const NUMBER = -132;
const getDigits = (number) => {
  if(!isNaN(parseInt(number, 10))) {
    if(number === 0) {
      return 1;
    }else if(number > 0) {
      return Math.floor(Math.log10(number) + 1);
    } else {
      return Math.floor(Math.log10(number * -1) + 1);
    }
  }
}

console.log(getDigits(NUMBER));