// time complexity O(log(min(a,b)));
// LCM(a,b) = (a * b) / gcd(a, b);
const findGCD = (a,b) => {
  if(b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}

const findLCM = (a, b) => {
  return (a * b) / findGCD(a, b);
}

console.log(findLCM(10, 15));