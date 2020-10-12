
const asyncForEach = arr => {
  arr.forEach(function(i){
    setTimeout(() => {console.log(i)}, 1000);
  });
}

asyncForEach([1,2,3])
