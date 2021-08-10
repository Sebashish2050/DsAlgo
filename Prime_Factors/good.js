// time complexity O(n * n)
const isPrime = n => {
  if( n <= 1) return false;
  if(n === 2 || n === 3) return true;
  if(n % 2 === 0 || n % 3 === 0) return false;
  for(i = 5; i * i <= n; i = i + 6) {
    if(n % i === 0 || n % (i + 2) === 0) return false
  }

  return true;
}

const printPrimeFactor = n => {
  if( n <= 1) return;
  for(let i = 2; i < n; i++) {
    if(isPrime(i)) {
      let x = i;
      while(n % x === 0) {
        console.log(i);
        x = x * i;
      }
    }  
  }
  
}

printPrimeFactor(84);