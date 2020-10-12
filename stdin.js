process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  console.log('input:::: ', input);
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const lines = input.split("\n");
    lines.forEach(data => {
      const values = data.split(' ');
      const result = Number(values[0]) + Number(values[1])
      process.stdout.write(result + "\n");
    });
    // console.log(result);
    // const values = input.split(' ');
    // const result = Number(values[0]) + Number(values[1]);
    // process.stdout.write(result + "\n");       // Writing output to STDOUT
}