// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const multiplesOf3Or5 = (num: number) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

multiplesOf3Or5(4); // 3
multiplesOf3Or5(15); // 60
multiplesOf3Or5(44); // 450
multiplesOf3Or5(434); // 43935
multiplesOf3Or5(1000); // 234168
