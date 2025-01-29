// Read input
var lines = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let currentLine = 0;

lines.on("line", (line) => {
  inputLines.push(line);
});

lines.on("close", () => {
  solve();
});

function solve() {
  const t = parseInt(inputLines[currentLine++]);

  for (let i = 0; i < t; i++) {
    const [a, b, c] = inputLines[currentLine++].split(" ").map(Number);

    // Check if any number is sum of other two
    if (a + b === c || b + c === a || a + c === b) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
