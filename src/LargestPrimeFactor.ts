// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

const largestPrimeFactor = (num: number): number => {
	let largestPrime = 0;
	let n = num;
	let i = 2;

	while (i <= n) {
		if (n % i === 0) {
			n /= i;
			largestPrime = i > largestPrime ? i : largestPrime;
		} else {
			i++;
		}
	}

	console.log(`Input: ${num}, Output: ${largestPrime}`);
	return largestPrime;
};

largestPrimeFactor(79); // 79
largestPrimeFactor(215); // 43
largestPrimeFactor(13195); // 29
largestPrimeFactor(116156359); // 127
largestPrimeFactor(600851475143); // 6857
