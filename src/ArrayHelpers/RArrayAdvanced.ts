/**
 * Sorts an array in ascending order without modifying the original array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to be sorted.
 * @returns A new array containing the elements of the input array sorted in ascending order.
 */
export function array_sort_asc<T>(array: T[]): T[] {
    return array.slice().sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
}

/**
 * Sorts an array in descending order without modifying the original array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to be sorted.
 * @returns A new array containing the elements of the input array sorted in descending order.
 */
export function array_sort_desc<T>(array: T[]): T[] {
    return array.slice().sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
}

/**
 * Swaps two elements in an array at the specified indices.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array in which the elements will be swapped.
 * @param index1 - The index of the first element to swap.
 * @param index2 - The index of the second element to swap.
 * @returns The same array with the elements swapped.
 */
export function array_swap<T>(array: T[], index1: number, index2: number): T[] {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        throw new RangeError('Index out of bounds');
    }
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

/**
 * Checks if an array is sorted in ascending or descending order.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to check.
 * @param order - The order to check for: 'asc' for ascending, 'desc' for descending.
 * @returns True if the array is sorted in the specified order, otherwise false.
 */
export function array_is_sorted<T>(array: T[], order: 'asc' | 'desc' = 'asc'): boolean {
    for (let i = 1; i < array.length; i++) {
        if (order === 'asc' && array[i] < array[i - 1]) {
            return false;
        }
        if (order === 'desc' && array[i] > array[i - 1]) {
            return false;
        }
    }
    return true;
}

/**
 * Checks if two arrays are equal.
 * 
 * @template T - The type of elements in the arrays.
 * @param array1 - The first array to compare.
 * @param array2 - The second array to compare.
 * @returns True if the arrays are equal, otherwise false.
 */
export function array_equal<T>(array1: T[], array2: T[]): boolean {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

/**
 * Rotates the elements of an array to the left by a specified number of times.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to rotate.
 * @param k - The number of times to rotate the array to the left.
 * @returns A new array with the elements rotated to the left.
 */
export function array_rotate_left<T>(array: T[], k: number): T[] {
    const length = array.length;
    if (length === 0) return [];
    const rotations = k % length;
    return array.slice(rotations).concat(array.slice(0, rotations));
}

/**
 * Rotates the elements of an array to the right by a specified number of times.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to rotate.
 * @param k - The number of times to rotate the array to the right.
 * @returns A new array with the elements rotated to the right.
 */
export function array_rotate_right<T>(array: T[], k: number): T[] {
    const length = array.length;
    if (length === 0) return [];
    const rotations = k % length;
    return array.slice(-rotations).concat(array.slice(0, -rotations));
}

/**
 * Randomly shuffles the elements of an array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to shuffle.
 * @returns A new array with the elements shuffled randomly.
 */
export function array_shuffle<T>(array: T[]): T[] {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

/**
 * Removes duplicate entries from an array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array from which duplicates will be removed.
 * @returns A new array with duplicate entries removed.
 */
export function array_remove_duplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

/**
 * Finds the second largest element in an array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to search.
 * @returns The second largest element in the array, or undefined if it doesn't exist.
 */
export function array_second_max(array: number[]): number | undefined {
    if (array.length < 2) return undefined;
    let max = -Infinity;
    let secondMax = -Infinity;

    for (const num of array) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    return secondMax === -Infinity ? undefined : secondMax;
}

/**
 * Finds the second smallest element in an array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to search.
 * @returns The second smallest element in the array, or undefined if it doesn't exist.
 */
export function array_second_min(array: number[]): number | undefined {
    if (array.length < 2) return undefined;
    let min = Infinity;
    let secondMin = Infinity;

    for (const num of array) {
        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }
    }

    return secondMin === Infinity ? undefined : secondMin;
}

/**
 * Replaces all occurrences of a specified value in an array with a new value.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array in which replacements will be made.
 * @param oldVal - The value to be replaced.
 * @param newVal - The value to replace with.
 * @returns A new array with all occurrences of oldVal replaced by newVal.
 */
export function array_replace_all<T>(array: T[], oldVal: T, newVal: T): T[] {
    return array.map(item => item === oldVal ? newVal : item);
}

/**
 * Removes all occurrences of a specified value from an array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array from which the value will be removed.
 * @param value - The value to remove.
 * @returns A new array with all occurrences of the specified value removed.
 */
export function array_remove_val<T>(array: T[], value: T): T[] {
    return array.filter(item => item !== value);
}

/**
 * Inserts a value at a specified position in an array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array in which the value will be inserted.
 * @param index - The position at which the value will be inserted.
 * @param value - The value to insert.
 * @returns A new array with the value inserted at the specified position.
 */
export function array_insert_at<T>(array: T[], index: number, value: T): T[] {
    if (index < 0 || index > array.length) {
        throw new RangeError('Index out of bounds');
    }
    return [...array.slice(0, index), value, ...array.slice(index)];
}

/**
 * Removes a value at a specified index in an array.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array from which the value will be removed.
 * @param index - The index of the value to remove.
 * @returns A new array with the value at the specified index removed.
 */
export function array_delete_at<T>(array: T[], index: number): T[] {
    if (index < 0 || index >= array.length) {
        throw new RangeError('Index out of bounds');
    }
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

/**
 * Concatenates two arrays into a single array.
 * 
 * @template T - The type of elements in the arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns A new array containing all elements from array1 followed by all elements from array2.
 */
export function array_merge<T>(array1: T[], array2: T[]): T[] {
    return [...array1, ...array2];
}

/**
 * Splits an array into two arrays at the specified index.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to split.
 * @param index - The index at which to split the array.
 * @returns A tuple containing two arrays: the first with elements before the index, and the second with elements from the index onward.
 */
export function array_split<T>(array: T[], index: number): [T[], T[]] {
    if (index < 0 || index > array.length) {
        throw new RangeError('Index out of bounds');
    }
    return [array.slice(0, index), array.slice(index)];
}

/**
 * Splits an array into chunks of a specified size.
 * 
 * @template T - The type of elements in the array.
 * @param array - The array to split into chunks.
 * @param size - The size of each chunk.
 * @returns An array of chunks, where each chunk is an array of elements.
 */
export function array_chunk<T>(array: T[], size: number): T[][] {
    if (size <= 0) {
        throw new RangeError('Chunk size must be greater than 0');
    }
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

/**
 * Computes the union of two arrays, removing duplicates.
 * 
 * @template T - The type of elements in the arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns A new array containing the union of the two arrays, with duplicates removed.
 */
export function array_union<T>(array1: T[], array2: T[]): T[] {
    return Array.from(new Set([...array1, ...array2]));
}

/**
 * Computes the intersection of two arrays, returning common elements.
 * 
 * @template T - The type of elements in the arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns A new array containing the common elements of the two arrays.
 */
export function array_intersection<T>(array1: T[], array2: T[]): T[] {
    const set2 = new Set(array2);
    return array1.filter(item => set2.has(item));
}

/**
 * Computes the difference of two arrays, returning elements in the first array that are not in the second array.
 * 
 * @template T - The type of elements in the arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns A new array containing elements in array1 that are not in array2.
 */
export function array_differences<T>(array1: T[], array2: T[]): T[] {
    const set2 = new Set(array2);
    return array1.filter(item => !set2.has(item));
}

/**
 * Computes the asymmetric difference of two arrays, returning elements that are in either array but not in both.
 * 
 * @template T - The type of elements in the arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns A new array containing elements that are in either array1 or array2 but not in both.
 */
export function array_asymmetric_difference<T>(array1: T[], array2: T[]): T[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return [
        ...array1.filter(item => !set2.has(item)),
        ...array2.filter(item => !set1.has(item))
    ];
}