// generate string of n + 5 length from concatinating primes from 1 to num

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  let square = Math.ceil(Math.sqrt(num));

  while (square > 2) {
    if (num % square === 0) return false;
    square -= 2;
  }

  return true;
}


const memoizePrimes = (cb) => {
  const store = { string: '' };
  let counter = 0;

  return (...args) => {
    const num = args[0];

    while (store['string'].length <= num + 5) {
      if (cb(counter) && !store[counter]) {
        store[counter] = true;
        store['string'] += String(counter);
      }

      counter++;
    }

    return store['string'].substring(num, num + 5);
  }
}

const memo = memoizePrimes(isPrime);
console.log(memo(50));
console.log(memo(100));
console.log(memo(45));
console.log(memo(1013));

console.time('10K');
console.log(memo(10000));
console.timeEnd('10K');

console.time('11K');
console.log(memo(11000));
console.timeEnd('11K');

console.time('20K');
console.log(memo(20000));
console.timeEnd('20K');
