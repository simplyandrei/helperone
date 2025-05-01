/**
 * Checks if a given character is an alphabetic letter (a-z or A-Z).
 *
 * @param char - The character to check. Must be a single character string.
 * @returns `true` if the character is alphabetic, otherwise `false`.
 * @throws {Error} If the input is not a single character.
 */
export function is_alpha(char: string): boolean {
    if (char.length !== 1) {
        throw new Error("Input must be a single character.");
    }
    return /^[a-zA-Z]$/.test(char);
}

/**
 * Checks if a given character is a numeric digit (0-9).
 *
 * @param char - The character to check. Must be a single character string.
 * @returns `true` if the character is a digit, otherwise `false`.
 * @throws {Error} If the input is not a single character.
 */
export function is_digit(char: string): boolean {
    if (char.length !== 1) {
        throw new Error("Input must be a single character.");
    }
    return /^[0-9]$/.test(char);
}

/**
 * Checks if a given character is an uppercase alphabetic letter (A-Z).
 *
 * @param char - The character to check. Must be a single character string.
 * @returns `true` if the character is uppercase, otherwise `false`.
 * @throws {Error} If the input is not a single character.
 */
export function is_upper(char: string): boolean {
    if (char.length !== 1) {
        throw new Error("Input must be a single character.");
    }
    return /^[A-Z]$/.test(char);
}

/**
 * Checks if a given character is a lowercase alphabetic letter (a-z).
 *
 * @param char - The character to check. Must be a single character string.
 * @returns `true` if the character is lowercase, otherwise `false`.
 * @throws {Error} If the input is not a single character.
 */
export function is_lower(char: string): boolean {
    if (char.length !== 1) {
        throw new Error("Input must be a single character.");
    }
    return /^[a-z]$/.test(char);
}

/**
 * Converts a given character to uppercase.
 *
 * @param char - The character to convert. Must be a single character string.
 * @returns The uppercase version of the character.
 * @throws {Error} If the input is not a single character.
 */
export function to_upper(char: string): string {
    if (char.length !== 1) {
        throw new Error("Input must be a single character.");
    }
    return char.toUpperCase();
}

/**
 * Converts a given character to lowercase.
 *
 * @param char - The character to convert. Must be a single character string.
 * @returns The lowercase version of the character.
 * @throws {Error} If the input is not a single character.
 */
export function to_lower(char: string): string {
    if (char.length !== 1) {
        throw new Error("Input must be a single character.");
    }
    return char.toLowerCase();
}

/**
 * Checks if a given character is a whitespace character (space, tab, newline).
 *
 * @param char - The character to check. Must be a single character string.
 * @returns `true` if the character is whitespace, otherwise `false`.
 * @throws {Error} If the input is not a single character.
 */
export function is_whitespace(char: string): boolean {
    if (char.length !== 1) {
        throw new Error("Input must be a single character.");
    }
    return /\s/.test(char);
}