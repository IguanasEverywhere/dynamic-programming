// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   }

//   let lastTwo = [0, 1];

//   for (let i = 0; i < num - 1; ++i) {
//     const sum = lastTwo[0] + lastTwo[1];
//     lastTwo = [lastTwo[1], sum];
//   }

//   return lastTwo[1];
// }

// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   }

//   let a = 0;
//   let b = 1;
//   let next = 1;

//   for (let i = 2; i < num; i++) {
//     a = b;
//     b = next;
//     next = a + b;
//   }
//   return next;

// }

let memoizedHash = {
  0: 0,
  1: 1,
}

function fibonacci(n) {

  if (memoizedHash[n] !== undefined) {
    return memoizedHash[n];
  }

  let val = fibonacci(n - 1) + fibonacci(n - 2);
  memoizedHash[n] = val;

  return val;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution