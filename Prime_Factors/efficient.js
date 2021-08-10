// time complexity O(sqrt(n)logn)
const printPrimeFactor = n => {
  if( n <= 1) return;
  for(let i = 2; i * i <= n; i++) {
    while(n % i === 0) {
      console.log(i);
      n = n / i;
    }  
  }
  if(n > 1) { 
    console.log(n);
  }
}

printPrimeFactor(84);