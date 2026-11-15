# fastest-primes — count primes <= N

Odd-only sieve in a `Uint8Array`. Run: `echo <N> | node primes.js`.

Verified: all 5 public samples + N=5,000,000 -> 348513 (correct).
Timing on this machine: N=5,000,000 in ~0.10s wall clock.
