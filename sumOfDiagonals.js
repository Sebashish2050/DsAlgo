// 10 40 20
// 50 60 40
// 20 40 20

const arr = [[10, 40, 20], [50, 60, 40], [20, 40, 20]];
const row = arr.length;
let diagonal1 = 0;
let diagonal2 = 0;
for(let i = 0; i < row; i++) {
  diagonal1 += arr[i][i];
  diagonal2 += arr[i][row - i - 1];
}

console.log(`diagonal1:: ${diagonal1}`);
console.log(`diagonal2:: ${diagonal2}`);