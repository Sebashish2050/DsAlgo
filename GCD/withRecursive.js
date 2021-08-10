// time complexity O(log(min(a,b)));
const findGCD = (a, b) => {
  if(b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}

console.log(findGCD(10, 15));