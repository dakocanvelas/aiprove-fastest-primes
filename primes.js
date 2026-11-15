// fastest-primes: count primes <= N (1 <= N <= 5,000,000) from stdin.
// Odd-only sieve in a Uint8Array. Usage: node primes.js < N
const fs = require("fs");
const n = +fs.readFileSync(0, "utf8").trim();
if (!(n >= 2)) { console.log(0); process.exit(0); }
const m = (n + 1) >> 1; // odds 1,3,5,... <= n, index i <-> number 2i+1
const comp = new Uint8Array(m);
const sq = Math.sqrt(n);
for (let i = 3; i <= sq; i += 2) {
  if (!comp[i >> 1]) {
    for (let j = (i * i) >> 1; j < m; j += i) comp[j] = 1;
  }
}
let c = 1; // prime 2
for (let i = 1; i < m; i++) if (!comp[i]) c++;
console.log(c);
