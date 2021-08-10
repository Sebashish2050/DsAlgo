const NUMBER = 132423;
const getDigits = (number) => {
  if(!isNaN(parseInt(number, 10))) {
    if(number=== 0) {
      return 0;
    }
    
    return 1 + getDigits( Math.floor(number / 10));
    
  }
}

console.log(getDigits(NUMBER));