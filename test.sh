#!/bin/bash
# usage: bash test.sh
for t in "10 4" "100 25" "1000 168" "100000 9592" "1000000 78498" "5000000 348513"; do
  set -- $t
  got=$(echo "$1" | node primes.js)
  [ "$got" = "$2" ] && echo "OK   N=$1 -> $got" || echo "FAIL N=$1 got $got want $2"
done
echo "--- timing N=5000000:"
time (echo 5000000 | node primes.js)
