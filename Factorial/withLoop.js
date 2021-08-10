const findFactorial = number => {
  if(number === 0) {
    return 1;
  }
  let fact = 1;
  while(number > 0) {
    fact = fact * number;
    number--;
  }

  return fact;
}

console.log(findFactorial(0));