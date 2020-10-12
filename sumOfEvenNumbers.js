const sumOfEvenNumbers_m1 = (n) => {
  if(n < 0) {
    console.log('No even numbers found');
    return;
  }

  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 2;
  }

  return (2*n + sumOfEvenNumbers_m1(n-1));
};

console.log(sumOfEvenNumbers_m1(10));

const sumOfEvenNumbers_m2 = (n) => {
  if(n < 0) {
    console.log('No even numbers found');
    return;
  }
  
  return (n * (n+1));
};
console.log(sumOfEvenNumbers_m2(10));
