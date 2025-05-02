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

