//
// 1, 2, 3,
// 4, 5, 6
// 7, 8, 9
// 

// 20, 40
// 10, 60

//
// [1],
// [2,4],
// [3,5,7],
// [6,8],
// [9]
// 

const arr = [[1,2,3], [4,5,6], [7,8,9]];
const len  = arr.length;
const antiArr = [];

for(let d = 0; d <= 2*(len - 1); d++) {
  const diagonalArr = [];
  for(i = 0; i <= d; i++) {
    const j = d - i;
    if(i >= len || j >= len) {
      continue;
    }
    diagonalArr.push(arr[j][i]);
  }
  antiArr.push(diagonalArr);
}

console.log(antiArr);