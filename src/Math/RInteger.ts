/**
 * Calculates the factorial of a given non-negative integer.
 * @param n - A non-negative integer.
 * @returns The factorial of the input number.
 * @throws Will throw an error if the input is a negative number.
 */
export function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Checks if a given number is a prime number.
 * @param num - The number to check.
 * @returns True if the number is prime, otherwise false.
 */
export function is_prime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Calculates the greatest common denominator (GCD) of two integers using the Euclidean algorithm.
 * @param a - The first integer.
 * @param b - The second integer.
 * @returns The GCD of the two input integers.
 */
export function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

/**
 * Calculates the least common denominator (LCD) of two integers.
 * @param a - The first integer.
 * @param b - The second integer.
 * @returns The LCD of the two input integers.
 */
export function lcd(a: number, b: number): number {
    if (a === 0 || b === 0) {
        return 0;
    }
    return Math.abs(a * b) / gcd(a, b);
}

/**
 * Calculates the absolute value of a number.
 * @param num - The number to find the absolute value of.
 * @returns The absolute value of the input number.
 */
export function absolute(num: number): number {
    return num < 0 ? -num : num;
}

/**
 * Calculates the square root of a number using Newton's method.
 * @param num - The number to find the square root of.
 * @param tolerance - The tolerance level for the approximation (default is 1e-7).
 * @returns The square root of the input number.
 * @throws Will throw an error if the input is negative.
 */
export function sqrt_newton(num: number, tolerance: number = 1e-7): number {
    if (num < 0) {
        throw new Error("Square root is not defined for negative numbers.");
    }
    if (num === 0 || num === 1) {
        return num;
    }
    let guess = num / 2;
    while (Math.abs(guess * guess - num) > tolerance) {
        guess = (guess + num / guess) / 2;
    }
    return guess;
}

/**
 * Checks if a given number is a perfect number.
 * A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding itself).
 * @param num - The number to check.
 * @returns True if the number is a perfect number, otherwise false.
 */
export function is_perfect(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    let sum = 1; // 1 is a proper divisor of all positive integers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum === num;
}

/**
 * Checks if a given number is an Armstrong number.
 * An Armstrong number (also known as a narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
 * @param num - The number to check.
 * @returns True if the number is an Armstrong number, otherwise false.
 */
export function is_armstrong(num: number): boolean {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

/**
 * Counts the number of digits in a given number.
 * @param num - The number to count the digits of.
 * @returns The number of digits in the input number.
 */
export function count_digits(num: number): number {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Calculates the nth Fibonacci number using an iterative approach.
 * @param n - The position (0-based) in the Fibonacci sequence.
 * @returns The nth Fibonacci number.
 * @throws Will throw an error if the input is a negative number.
 */
export function nth_fibonacci(n: number): number {
    if (n < 0) {
        throw new Error("Fibonacci is not defined for negative indices.");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

/**
 * Calculates the sum of the digits of a given number.
 * @param num - The number to calculate the sum of its digits.
 * @returns The sum of the digits of the input number.
 */
export function sum_of_digits(num: number): number {
    return Math.abs(num)
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);
}

/**
 * Reverses the digits of a given number.
 * @param num - The number to reverse.
 * @returns The number with its digits reversed.
 */
export function reverse_number(num: number): number {
    const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''), 10);
    return num < 0 ? -reversed : reversed;
}

/**
 * Checks if a given number is a palindrome.
 * A palindrome is a number that reads the same backward as forward.
 * @param num - The number to check.
 * @returns True if the number is a palindrome, otherwise false.
 */
export function is_palindrome(num: number): boolean {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

/**
 * Calculates the number of combinations (nCr) for given n and r.
 * @param n - The total number of items.
 * @param r - The number of items to choose.
 * @returns The number of combinations.
 * @throws Will throw an error if n or r is negative or if r > n.
 */
export function combinations(n: number, r: number): number {
    if (n < 0 || r < 0) {
        throw new Error("n and r must be non-negative integers.");
    }
    if (r > n) {
        throw new Error("r cannot be greater than n.");
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
}

/**
 * Calculates the number of permutations (nPr) for given n and r.
 * @param n - The total number of items.
 * @param r - The number of items to arrange.
 * @returns The number of permutations.
 * @throws Will throw an error if n or r is negative or if r > n.
 */
export function permutations(n: number, r: number): number {
    if (n < 0 || r < 0) {
        throw new Error("n and r must be non-negative integers.");
    }
    if (r > n) {
        throw new Error("r cannot be greater than n.");
    }
    return factorial(n) / factorial(n - r);
}