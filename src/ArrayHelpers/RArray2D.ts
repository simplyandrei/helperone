/**
 * Transposes a 2D array (matrix).
 * @param matrix - The 2D array to transpose.
 * @returns A new 2D array that is the transpose of the input matrix.
 */
export function array2D_transpose<T>(matrix: T[][]): T[][] {
    if (matrix.length === 0) return [];
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

/**
 * Sums all elements in a 2D array (matrix).
 * @param matrix - The 2D array to sum.
 * @returns The sum of all elements in the matrix.
 */
export function array2D_sum(matrix: number[][]): number {
    return matrix.reduce((sum, row) => sum + row.reduce((rowSum, value) => rowSum + value, 0), 0);
}

/**
 * Computes the sum of each row in a 2D array (matrix).
 * @param matrix - The 2D array to compute row-wise sums.
 * @returns An array where each element is the sum of the corresponding row in the matrix.
 */
export function array2D_row_sum(matrix: number[][]): number[] {
    return matrix.map(row => row.reduce((rowSum, value) => rowSum + value, 0));
}

/**
 * Computes the sum of each column in a 2D array (matrix).
 * @param matrix - The 2D array to compute column-wise sums.
 * @returns An array where each element is the sum of the corresponding column in the matrix.
 */
export function array2D_column_sum(matrix: number[][]): number[] {
    if (matrix.length === 0) return [];
    const numCols = matrix[0].length;
    return Array.from({ length: numCols }, (_, colIndex) => matrix.reduce((colSum, row) => colSum + row[colIndex], 0));
}

/**
 * Checks if a square 2D array (matrix) is symmetric.
 * A matrix is symmetric if it is equal to its transpose.
 * @param matrix - The 2D array to check.
 * @returns True if the matrix is symmetric, false otherwise.
 */
export function array2D_is_symmetric(matrix: number[][]): boolean {
    if (matrix.length === 0) return true; // An empty matrix is symmetric.
    if (matrix.length !== matrix[0].length) return false; // Must be square.

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}

/**
 * Checks if a square 2D array (matrix) is an identity matrix.
 * An identity matrix has 1s on the diagonal and 0s elsewhere.
 * @param matrix - The 2D array to check.
 * @returns True if the matrix is an identity matrix, false otherwise.
 */
export function array2D_is_identity(matrix: number[][]): boolean {
    if (matrix.length === 0) return true; // An empty matrix can be considered an identity matrix.
    if (matrix.length !== matrix[0].length) return false; // Must be square.

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j && matrix[i][j] !== 1) return false; // Diagonal elements must be 1.
            if (i !== j && matrix[i][j] !== 0) return false; // Non-diagonal elements must be 0.
        }
    }
    return true;
}

/**
 * Rotates a 2D array (matrix) by 90 degrees clockwise.
 * @param matrix - The 2D array to rotate.
 * @returns A new 2D array that is the rotated version of the input matrix.
 */
export function array2D_rotate_90<T>(matrix: T[][]): T[][] {
    if (matrix.length === 0) return [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const rotated: T[][] = Array.from({ length: numCols }, () => Array(numRows));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            rotated[j][numRows - 1 - i] = matrix[i][j];
        }
    }

    return rotated;
}

/**
 * Prints a 2D array (matrix) to the console in a readable format.
 * @param matrix - The 2D array to print.
 */
export function array2D_print<T>(matrix: T[][]): void {
    matrix.forEach(row => console.log(row.join(' ')));
}