/**
 * Calculates the mean (average) of an array of numbers.
 *
 * @param numbers - An array of numbers to calculate the mean from.
 * @returns The mean (average) of the numbers in the array.
 * @throws {Error} Throws an error if the input array is empty.
 */
export function mean(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

/**
 * Calculates the median of an array of numbers.
 *
 * @param numbers - An array of numbers to calculate the median from.
 * @returns The median of the numbers in the array.
 * @throws {Error} Throws an error if the input array is empty.
 */
export function median(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

/**
 * Calculates the mode of an array of numbers.
 *
 * @param numbers - An array of numbers to calculate the mode from.
 * @returns The mode of the numbers in the array. If there are multiple modes, returns an array of modes.
 * @throws {Error} Throws an error if the input array is empty.
 */
export function mode(numbers: number[]): number | number[] {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }

    const frequencyMap: Record<number, number> = {};
    numbers.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const modes = Object.keys(frequencyMap)
        .filter(key => frequencyMap[Number(key)] === maxFrequency)
        .map(Number);

    return modes.length === 1 ? modes[0] : modes;
}

/**
 * Calculates the variance of an array of numbers.
 *
 * @param numbers - An array of numbers to calculate the variance from.
 * @returns The variance of the numbers in the array.
 * @throws {Error} Throws an error if the input array is empty.
 */
export function variance(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const meanValue = mean(numbers);
    const squaredDifferences = numbers.map(num => Math.pow(num - meanValue, 2));
    return squaredDifferences.reduce((acc, val) => acc + val, 0) / numbers.length;
}

/**
 * Calculates the standard deviation of an array of numbers.
 *
 * @param numbers - An array of numbers to calculate the standard deviation from.
 * @returns The standard deviation of the numbers in the array.
 * @throws {Error} Throws an error if the input array is empty.
 */
export function standardDeviation(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const varianceValue = variance(numbers);
    return Math.sqrt(varianceValue);
}