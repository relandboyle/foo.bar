// generate string of n + 5 length from string of all primes from 1 to num
// 0 < n < 10,000

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  let square = Math.floor(Math.sqrt(num));

  while (square > 2) {
    if (num % square === 0) return false;
    square -= 2;
  }

  return true;
}


const memoizePrimes = (callback) => {
  const store = { string: '' };
  let counter = 0;

  return (...args) => {
    const num = args[0];

    while (store['string'].length <= num + 5) {
      if (callback(counter) && !store[counter]) {
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
console.log('\n');

console.time('10K');
console.log(memo(10000));
console.timeEnd('10K');
console.log('\n');

console.time('11K');
console.log(memo(11000));
console.timeEnd('11K');
console.log('\n');

console.time('10M');
console.log(memo(10000000));
console.timeEnd('10M');
console.log('\n');

console.time('1M');
console.log(memo(1000000));
console.timeEnd('1M');
console.log('\n');

console.time('10M-1');
console.log(memo(9999999));
console.timeEnd('10M-1');
console.log('\n');

console.time('10M+1');
console.log(memo(10000001));
console.timeEnd('10M+1');

