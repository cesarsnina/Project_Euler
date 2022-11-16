// PROBLEM # 6

// The sum of the squares of the first ten natural numbers is,
// 1**2 + 2**2 + ... + 10**2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)**2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
// 3025 - 385 = 2640

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquareDifference = (num: number): number => {
	let sumOfSqare = 0;
	let squareOfSum = 0;
	const halfOfNum = ~~(num / 2);
	for (let i = 0; i < halfOfNum; i++) {
		sumOfSqare += (i + 1) ** 2 + (num - i) ** 2;
		squareOfSum += num + 1;
	}
	if (num % 2 !== 0) {
		sumOfSqare += (halfOfNum + 1) ** 2;
		squareOfSum += halfOfNum + 1;
	}
	squareOfSum = squareOfSum ** 2;
	console.log(
		`input: ${num}, output: ${squareOfSum - sumOfSqare}`
	);
	return 0;
};

sumSquareDifference(10); // 2640
sumSquareDifference(27); // 135954
sumSquareDifference(48); // 1344952
sumSquareDifference(69); // 5720330
sumSquareDifference(100); // 25604150
