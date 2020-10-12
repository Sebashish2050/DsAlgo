const sumOfNaturalNumbers_m1 = n => {
  if(n < 1) {
    console.log('Not a valid natural number');
    return;
  }

  if(n === 1) {
    return 1;
  }

  return (n + sumOfNaturalNumbers_m1(n-1));
}
console.log(sumOfNaturalNumbers_m1(10));

const sumOfNaturalNumbers_m2 = n => {
  if(n < 1) {
    console.log('Not a valid natural number');
    return;
  }

  return (n * (n+1) / 2);
}
console.log(sumOfNaturalNumbers_m2(10));