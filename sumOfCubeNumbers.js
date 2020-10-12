const sumOfCubeNumbers_m1 = n => {
  if(n < 1) {
    console.log('Not a valid natural number');
    return;
  }

  if(n === 1) {
    return 1;
  }

  return (n*n*n + sumOfCubeNumbers_m1(n-1));
}
console.log(sumOfCubeNumbers_m1(3));

const sumOfCubeNumbers_m2 = n => {
  if(n < 1) {
    console.log('Not a valid natural number');
    return;
  }

  return ((n * (n+1) / 2) * (n * (n+1) / 2));
}
console.log(sumOfCubeNumbers_m2(3));