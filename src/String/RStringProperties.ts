/**
 * Determines whether the given string consists only of numeric characters.
 *
 * @param input - The string to be checked.
 * @returns `true` if the input string contains only numeric characters; otherwise, `false`.
 */
export function isNumeric(input: string): boolean {
    return /^\d+$/.test(input);
}

/**
 * Determines whether the given string consists only of alphabetic characters.
 *
 * @param input - The string to be checked.
 * @returns `true` if the input string contains only alphabetic characters; otherwise, `false`.
 */
export function isAlphabetic(input: string): boolean {
    return /^[a-zA-Z]+$/.test(input);
}

/**
 * Determines whether the given string consists only of alphanumeric characters (letters and numbers).
 *
 * @param input - The string to be checked.
 * @returns `true` if the input string contains only alphanumeric characters; otherwise, `false`.
 */
export function isAlphanumeric(input: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(input);
}

/**
 * Determines whether the given string consists only of lowercase alphabetic characters.
 *
 * @param input - The string to be checked.
 * @returns `true` if the input string contains only lowercase alphabetic characters; otherwise, `false`.
 */
export function isLowercase(input: string): boolean {
    return /^[a-z]+$/.test(input);
}

/**
 * Determines whether the given string consists only of uppercase alphabetic characters.
 *
 * @param input - The string to be checked.
 * @returns `true` if the input string contains only uppercase alphabetic characters; otherwise, `false`.
 */
export function isUppercase(input: string): boolean {
    return /^[A-Z]+$/.test(input);
}