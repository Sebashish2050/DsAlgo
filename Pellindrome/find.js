const findPelindrome = (number) => {
  if(number <= 0) {
    return false;
  }

  let rev = 0;
  let initNumber = number;
    while(number > 0) {
      const reminder = number % 10;
      rev = (rev * 10) + reminder
      number = Math.floor(number / 10);
    }
  return initNumber === rev;
}

console.log(findPelindrome(101));