import * as readline from "readline";

let s: number;

function hanoi(
  n: number,
  source: string,
  auxiliary: string,
  destination: string
): void {
  if (n === 1) {
    console.log(`${source} --> ${destination}`);
    s++;
  } else {
    hanoi(n - 1, source, destination, auxiliary);
    console.log(`${source} --> ${destination}`);
    s++;
    hanoi(n - 1, auxiliary, source, destination);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number of disks: ", (answer) => {
  const n: number = parseInt(answer);
  console.log();
  s = 0;
  hanoi(n, "S", "A", "D");
  console.log("\nNumber of steps:", s);
  rl.close();
});
