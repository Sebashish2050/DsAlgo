const sumOfOddNumbers_m1 = n => {
  if(n < 1) {
    console.log('Not a valid odd number');
    return;
  }

  if(n === 1) {
    return 1;
  }

  return (2*n-1 + sumOfOddNumbers_m1(n-1));
}
console.log(sumOfOddNumbers_m1(3));

const sumOfOddNumbers_m2 = n => {
  if(n < 1) {
    console.log('Not a valid odd number');
    return;
  }

  return (n * n);
}
console.log(sumOfOddNumbers_m2(3));