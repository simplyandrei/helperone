/**
 * Calculates the logarithm of a number with a specified base using logarithmic identities.
 * @param value The number to calculate the logarithm for.
 * @param base The base of the logarithm. Defaults to natural logarithm (base e).
 * @returns The logarithm of the number with the specified base.
 */
export function logarithm(value: number, base: number = Math.E): number {
    if (value <= 0 || base <= 0 || base === 1) {
        throw new Error("Invalid input: value and base must be positive, and base cannot be 1.");
    }

    // Using the change of base formula: log_a(b) = log(b) / log(a)
    const numerator = Math.log(value); // Natural logarithm of the value
    const denominator = Math.log(base); // Natural logarithm of the base

    return numerator / denominator;
}

/**
 * Approximates the exponential function using the Taylor Series expansion.
 * @param x The exponent to calculate e^x for.
 * @param terms The number of terms to include in the Taylor Series. Defaults to 10.
 * @returns The approximate value of e^x.
 */
export function exp_approx(x: number, terms: number = 10): number {
    if (terms <= 0) {
        throw new Error("Invalid input: terms must be a positive integer.");
    }

    let result = 1; // Start with the first term of the series (1)
    let term = 1; // Current term in the series

    for (let n = 1; n < terms; n++) {
        term *= x / n; // Calculate the next term in the series
        result += term; // Add the term to the result
    }

    return result;
}

/**
 * Approximates the sine function using the Taylor Series expansion.
 * @param x The angle in radians to calculate sin(x) for.
 * @param terms The number of terms to include in the Taylor Series. Defaults to 10.
 * @returns The approximate value of sin(x).
 */
export function sin_approx(x: number, terms: number = 10): number {
    if (terms <= 0) {
        throw new Error("Invalid input: terms must be a positive integer.");
    }

    let result = 0; // Start with the initial value of the series
    let term = x; // First term in the series (x)
    let sign = 1; // Alternating sign for each term

    for (let n = 1; n <= terms; n++) {
        result += sign * term; // Add the current term to the result
        term *= (x * x) / ((2 * n) * (2 * n + 1)); // Calculate the next term
        sign *= -1; // Alternate the sign
    }

    return result;
}

/**
 * Approximates the cosine function using the Taylor Series expansion.
 * @param x The angle in radians to calculate cos(x) for.
 * @param terms The number of terms to include in the Taylor Series. Defaults to 10.
 * @returns The approximate value of cos(x).
 */
export function cos_approx(x: number, terms: number = 10): number {
    if (terms <= 0) {
        throw new Error("Invalid input: terms must be a positive integer.");
    }

    let result = 1; // Start with the first term of the series (1)
    let term = 1; // Current term in the series
    let sign = -1; // Alternating sign for each term

    for (let n = 1; n < terms; n++) {
        term *= (x * x) / ((2 * n - 1) * (2 * n)); // Calculate the next term
        result += sign * term; // Add the term to the result
        sign *= -1; // Alternate the sign
    }

    return result;
}

/**
 * Approximates the tangent function using the sine and cosine approximations.
 * @param x The angle in radians to calculate tan(x) for.
 * @param terms The number of terms to include in the Taylor Series for sine and cosine. Defaults to 10.
 * @returns The approximate value of tan(x).
 */
export function tan_approx(x: number, terms: number = 10): number {
    const sinValue = sin_approx(x, terms);
    const cosValue = cos_approx(x, terms);

    if (cosValue === 0) {
        throw new Error("Invalid input: tangent is undefined for angles where cos(x) is 0.");
    }

    return sinValue / cosValue;
}

/**
 * Calculates the n-th root of a number using the Newton-Raphson method.
 * @param value The number to calculate the n-th root for.
 * @param n The degree of the root.
 * @param tolerance The tolerance for the approximation. Defaults to 1e-7.
 * @param maxIterations The maximum number of iterations. Defaults to 100.
 * @returns The approximate n-th root of the number.
 */
export function nth_root(value: number, n: number, tolerance: number = 1e-7, maxIterations: number = 100): number {
    if (value < 0 && n % 2 === 0) {
        throw new Error("Invalid input: cannot calculate even root of a negative number.");
    }
    if (n <= 0) {
        throw new Error("Invalid input: n must be a positive integer.");
    }

    let x = value; // Initial guess
    for (let i = 0; i < maxIterations; i++) {
        const nextX = ((n - 1) * x + value / Math.pow(x, n - 1)) / n;
        if (Math.abs(nextX - x) < tolerance) {
            return nextX;
        }
        x = nextX;
    }

    throw new Error("Failed to converge to a solution within the maximum number of iterations.");
}