import * as readline from "readline";

let rod: string[] = ["S", "A", "D"];
let stacks: number[][] = [[], [], []]; // 3 stacks for 3 rods

function move(a: number, b: number): void {
  if (
    stacks[b].length === 0 ||
    (stacks[a].length > 0 &&
      stacks[a][stacks[a].length - 1] < stacks[b][stacks[b].length - 1])
  ) {
    console.log(
      `Move disk ${stacks[a][stacks[a].length - 1]} from rod ${rod[a]} to rod ${
        rod[b]
      }`
    );
    stacks[b].push(stacks[a].pop()!);
  } else {
    move(b, a);
  }
}

function hanoi(n: number): void {
  console.log(`Tower of Hanoi for ${n} disks:`);

  let src: number = 0,
    aux: number = 1,
    dest: number = 2;
  for (let i = n; i > 0; i--) {
    stacks[src].push(i);
  }

  let totalMoves: number = (1 << n) - 1; // 2^n - 1
  if (n % 2 === 0) {
    [aux, dest] = [dest, aux];
  }

  for (let i = 1; i <= totalMoves; i++) {
    if (i % 3 === 0) {
      move(aux, dest);
    } else if (i % 3 === 1) {
      move(src, dest);
    } else {
      move(src, aux);
    }
  }

  console.log("\nNumber of steps:", totalMoves);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number of disks: ", (answer) => {
  const n: number = parseInt(answer);
  console.log();
  hanoi(n);
  rl.close();
});
