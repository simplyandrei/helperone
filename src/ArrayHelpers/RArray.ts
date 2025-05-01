/**
 * Calculates the sum of all elements in a numeric array.
 *
 * @param arr - An array of numbers to be summed.
 * @returns The total sum of the array elements.
 */
export function array_sum(arr: number[]): number {
    return arr.reduce((sum, current) => sum + current, 0);
}

/**
 * Calculates the average of all elements in a numeric array.
 *
 * @param arr - An array of numbers to calculate the average.
 * @returns The average of the array elements.
 */
export function array_average(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array must not be empty");
    }
    return array_sum(arr) / arr.length;
}

/**
 * Finds the maximum value in a numeric array.
 *
 * @param arr - An array of numbers to find the maximum value.
 * @returns The maximum value in the array.
 */
export function array_max(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array must not be empty");
    }
    return Math.max(...arr);
}

/**
 * Finds the minimum value in a numeric array.
 *
 * @param arr - An array of numbers to find the minimum value.
 * @returns The minimum value in the array.
 */
export function array_min(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array must not be empty");
    }
    return Math.min(...arr);
}

/**
 * Reverses the array in-place.
 *
 * @param arr - An array of elements to be reversed.
 * @returns The same array, reversed.
 */
export function array_reverse<T>(arr: T[]): T[] {
    return arr.reverse();
}

/**
 * Prints the array contents.
 *
 * @param arr - An array of elements to be printed.
 */
export function array_print<T>(arr: T[]): void {
    console.log(arr);
}

/**
 * Copies the contents of one array to another.
 *
 * @param source - The source array to copy from.
 * @returns A new array containing the same elements as the source array.
 */
export function array_copy<T>(source: T[]): T[] {
    return [...source];
}

/**
 * Checks if the array contains the target element.
 *
 * @param arr - An array of elements to search in.
 * @param target - The element to search for.
 * @returns True if the target is found in the array, otherwise false.
 */
export function array_contains<T>(arr: T[], target: T): boolean {
    return arr.includes(target);
}

/**
 * Finds the first index of the target element in the array.
 *
 * @param arr - An array of elements to search in.
 * @param target - The element to search for.
 * @returns The first index of the target element, or -1 if not found.
 */
export function array_index_of<T>(arr: T[], target: T): number {
    return arr.indexOf(target);
}

/**
 * Fills an array with a constant value.
 *
 * @param length - The length of the array to be created.
 * @param value - The constant value to fill the array with.
 * @returns A new array filled with the specified value.
 */
export function array_fill<T>(length: number, value: T): T[] {
    if (length < 0) {
        throw new Error("Length must be a non-negative number");
    }
    return new Array(length).fill(value);
}

/**
 * Counts the number of occurrences of a specific value in an array.
 *
 * @param arr - An array of elements to search in.
 * @param value - The value to count occurrences of.
 * @returns The number of times the value appears in the array.
 */
export function array_count_occurrences<T>(arr: T[], value: T): number {
    return arr.reduce((count, current) => (current === value ? count + 1 : count), 0);
}