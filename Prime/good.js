// Time complexity O(n)
const isPrime = number => {
  if(number === 1) return false;

  for(let i = 2; i <= Math.floor(number/2); i++) {
    if(number % i === 0) return false
  }

  return true;
}

console.log(isPrime(16));