const sumOfSuareNumbers_m1 = n => {
  if(n < 1) {
    console.log('Not a valid natural number');
    return;
  }

  if(n === 1) {
    return 1;
  }

  return (n*n + sumOfSuareNumbers_m1(n-1));
}
console.log(sumOfSuareNumbers_m1(2));

const sumOfSuareNumbers_m2 = n => {
  if(n < 1) {
    console.log('Not a valid natural number');
    return;
  }

  return (n * (n+1) * (2*n + 1) / 6);
}
console.log(sumOfSuareNumbers_m2(2));