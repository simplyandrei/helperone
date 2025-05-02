/**
 * Performs a linear search on an array to find the index of a target element.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to search through.
 * @param target - The element to search for in the array.
 * @returns The index of the target element if found; otherwise, returns -1.
 */
export function array_linear_search<T>(array: T[], target: T): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1; // Return -1 if the target is not found
}

/**
 * Performs a binary search on a sorted array to find the index of a target element.
 *
 * @template T - The type of elements in the array.
 * @param array - The sorted array to search through.
 * @param target - The element to search for in the array.
 * @returns The index of the target element if found; otherwise, returns -1.
 */
export function array_binary_search<T>(array: T[], target: T): number {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Return -1 if the target is not found
}

/**
 * Finds a peak element in the array. A peak element is an element that is greater than or equal to its neighbors.
 *
 * @param array - The array to search for a peak element.
 * @returns The index of a peak element if found; otherwise, returns -1 if the array is empty.
 */
export function array_find_peak(array: number[]): number {
    if (array.length === 0) {
        return -1; // Return -1 if the array is empty
    }

    for (let i = 0; i < array.length; i++) {
        const left = i === 0 || array[i] >= array[i - 1];
        const right = i === array.length - 1 || array[i] >= array[i + 1];

        if (left && right) {
            return i; // Return the index of the peak element
        }
    }

    return -1; // Return -1 if no peak element is found
}

/**
 * Finds the majority element in an array. The majority element is the element that appears more than n/2 times.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to search for the majority element.
 * @returns The majority element if found; otherwise, returns null.
 */
export function array_majority_element<T>(array: T[]): T | null {
    const countMap = new Map<T, number>();
    const majorityCount = Math.floor(array.length / 2);

    for (const element of array) {
        const count = (countMap.get(element) || 0) + 1;
        countMap.set(element, count);

        if (count > majorityCount) {
            return element; // Return the majority element
        }
    }

    return null; // Return null if no majority element is found
}

/**
 * Finds the k-th smallest element in an array using the Quickselect algorithm.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to search for the k-th smallest element.
 * @param k - The 1-based index of the smallest element to find.
 * @returns The k-th smallest element if found; otherwise, throws an error if k is out of bounds.
 */
export function array_kth_smallest<T>(array: T[], k: number): T {
    if (k < 1 || k > array.length) {
        throw new Error("k is out of bounds");
    }

    function partition(left: number, right: number, pivotIndex: number): number {
        const pivotValue = array[pivotIndex];
        [array[pivotIndex], array[right]] = [array[right], array[pivotIndex]]; // Move pivot to end
        let storeIndex = left;

        for (let i = left; i < right; i++) {
            if (array[i] < pivotValue) {
                [array[storeIndex], array[i]] = [array[i], array[storeIndex]];
                storeIndex++;
            }
        }

        [array[right], array[storeIndex]] = [array[storeIndex], array[right]]; // Move pivot to its final place
        return storeIndex;
    }

    function quickselect(left: number, right: number, kSmallest: number): T {
        if (left === right) {
            return array[left]; // If the list contains only one element
        }

        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const partitionIndex = partition(left, right, pivotIndex);

        if (kSmallest === partitionIndex) {
            return array[kSmallest];
        } else if (kSmallest < partitionIndex) {
            return quickselect(left, partitionIndex - 1, kSmallest);
        } else {
            return quickselect(partitionIndex + 1, right, kSmallest);
        }
    }

    return quickselect(0, array.length - 1, k - 1);
}

/**
 * Finds the k-th largest element in an array using the Quickselect algorithm.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to search for the k-th largest element.
 * @param k - The 1-based index of the largest element to find.
 * @returns The k-th largest element if found; otherwise, throws an error if k is out of bounds.
 */
export function array_kth_largest<T>(array: T[], k: number): T {
    if (k < 1 || k > array.length) {
        throw new Error("k is out of bounds");
    }

    function partition(left: number, right: number, pivotIndex: number): number {
        const pivotValue = array[pivotIndex];
        [array[pivotIndex], array[right]] = [array[right], array[pivotIndex]]; // Move pivot to end
        let storeIndex = left;

        for (let i = left; i < right; i++) {
            if (array[i] > pivotValue) { // Change comparison to '>' for largest
                [array[storeIndex], array[i]] = [array[i], array[storeIndex]];
                storeIndex++;
            }
        }

        [array[right], array[storeIndex]] = [array[storeIndex], array[right]]; // Move pivot to its final place
        return storeIndex;
    }

    function quickselect(left: number, right: number, kLargest: number): T {
        if (left === right) {
            return array[left]; // If the list contains only one element
        }

        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const partitionIndex = partition(left, right, pivotIndex);

        if (kLargest === partitionIndex) {
            return array[kLargest];
        } else if (kLargest < partitionIndex) {
            return quickselect(left, partitionIndex - 1, kLargest);
        } else {
            return quickselect(partitionIndex + 1, right, kLargest);
        }
    }

    return quickselect(0, array.length - 1, k - 1);
}

/**
 * Finds the length of the longest increasing subsequence (LIS) in an array.
 *
 * @param array - The array to find the LIS in.
 * @returns The length of the longest increasing subsequence.
 */
export function array_longest_increasing_subsequence(array: number[]): number {
    if (array.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    const dp = new Array(array.length).fill(1);

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp); // Return the maximum value in dp array
}

/**
 * Finds the length of the longest common subarray (LCS) between two arrays.
 *
 * @template T - The type of elements in the arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns The length of the longest common subarray.
 */
export function array_longest_common_subarray<T>(array1: T[], array2: T[]): number {
    const dp = Array.from({ length: array1.length + 1 }, () => new Array(array2.length + 1).fill(0));
    let maxLength = 0;

    for (let i = 1; i <= array1.length; i++) {
        for (let j = 1; j <= array2.length; j++) {
            if (array1[i - 1] === array2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLength = Math.max(maxLength, dp[i][j]);
            }
        }
    }

    return maxLength;
}

/**
 * Finds the maximum sum of a contiguous subarray using Kadane's Algorithm.
 *
 * @param array - The array to find the maximum subarray sum in.
 * @returns The maximum sum of a contiguous subarray.
 */
export function array_max_subarray_sum(array: number[]): number {
    if (array.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    let maxSum = array[0];
    let currentSum = array[0];

    for (let i = 1; i < array.length; i++) {
        currentSum = Math.max(array[i], currentSum + array[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

/**
 * Computes the prefix sum (cumulative sum) array of the given array.
 *
 * @param array - The array to compute the prefix sum for.
 * @returns An array where each element at index i is the sum of elements from index 0 to i in the input array.
 */
export function array_prefix_sum(array: number[]): number[] {
    const prefixSum = new Array(array.length);
    if (array.length === 0) {
        return prefixSum; // Return an empty array if the input array is empty
    }

    prefixSum[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + array[i];
    }

    return prefixSum;
}

/**
 * Computes the difference array of the given array.
 * The difference array is an array where each element at index i is the difference between
 * the element at index i and the element at index i-1 in the input array.
 *
 * @param array - The array to compute the difference array for.
 * @returns An array where each element at index i is the difference between array[i] and array[i-1].
 */
export function array_difference_array(array: number[]): number[] {
    if (array.length === 0) {
        return []; // Return an empty array if the input array is empty
    }

    const differenceArray = new Array(array.length);
    differenceArray[0] = array[0]; // The first element remains the same

    for (let i = 1; i < array.length; i++) {
        differenceArray[i] = array[i] - array[i - 1];
    }

    return differenceArray;
}

/**
 * Moves all zeros in the array to the end while maintaining the relative order of non-zero elements.
 *
 * @param array - The array to modify.
 * @returns The modified array with all zeros moved to the end.
 */
export function array_move_zeros_to_end(array: number[]): number[] {
    let nonZeroIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            [array[nonZeroIndex], array[i]] = [array[i], array[nonZeroIndex]];
            nonZeroIndex++;
        }
    }

    return array;
}

/**
 * Segregates even and odd numbers in the array, placing all even numbers to the left
 * and all odd numbers to the right while maintaining their relative order.
 *
 * @param array - The array to segregate.
 * @returns The modified array with even numbers on the left and odd numbers on the right.
 */
export function array_segregate_even_odd(array: number[]): number[] {
    let evenIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            [array[evenIndex], array[i]] = [array[i], array[evenIndex]];
            evenIndex++;
        }
    }

    return array;
}

/**
 * Partitions the array into two groups: positive numbers and negative numbers.
 * Positive numbers are placed on the left, and negative numbers are placed on the right.
 *
 * @param array - The array to partition.
 * @returns The modified array with positive numbers on the left and negative numbers on the right.
 */
export function array_partition_by_sign(array: number[]): number[] {
    let positiveIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            [array[positiveIndex], array[i]] = [array[i], array[positiveIndex]];
            positiveIndex++;
        }
    }

    return array;
}

