/**
 * Calculates the length of the given string.
 *
 * @param input - The string whose length is to be calculated.
 * @returns The length of the input string.
 */
export function string_length(input: string): number {
    return input.length;
}

/**
 * Creates a copy of the given string.
 *
 * @param input - The string to be copied.
 * @returns A new string that is a copy of the input string.
 */
export function string_copy(input: string): string {
    return input.slice();
}

/**
 * Compares two strings for equality.
 *
 * @param str1 - The first string to compare.
 * @param str2 - The second string to compare.
 * @returns True if the strings are equal, false otherwise.
 */
export function string_compare(str1: string, str2: string): boolean {
    return str1 === str2;
}

/**
 * Concatenates two strings.
 *
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns A new string that is the result of concatenating str1 and str2.
 */
export function string_concat(str1: string, str2: string): string {
    return str1 + str2;
}

/**
 * Allocates and returns a duplicate string.
 *
 * @param input - The string to duplicate.
 * @returns A new string that is a duplicate of the input string.
 */
export function string_duplicate(input: string): string {
    return input.slice();
}

/**
 * Converts a string to an integer.
 *
 * @param input - The string to convert to an integer.
 * @returns The integer representation of the string, or NaN if the conversion fails.
 */
export function string_to_int(input: string): number {
    return parseInt(input, 10);
}

/**
 * Converts an integer to a string.
 *
 * @param input - The integer to convert to a string.
 * @returns The string representation of the integer.
 */
export function int_to_string(input: number): string {
    return input.toString();
}

/**
 * Reverses the given string.
 *
 * @param input - The string to be reversed.
 * @returns A new string that is the reverse of the input string.
 */
export function string_reverse(input: string): string {
    return input.split('').reverse().join('');
}