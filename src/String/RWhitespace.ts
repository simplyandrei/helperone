/**
 * Trims leading and trailing whitespace characters from the given string.
 *
 * @param input - The string to be trimmed.
 * @returns A new string with whitespace removed from both ends.
 */
export function trim(input: string): string {
    return input.trim();
}

/**
 * Removes all leading whitespace characters from the beginning of the input string.
 *
 * @param input - The string to be trimmed of leading whitespace.
 * @returns A new string with leading whitespace removed.
 */
export function trim_left(input: string): string {
    return input.replace(/^\s+/, '');
}

/**
 * Removes trailing whitespace characters from the end of a string.
 *
 * @param input - The input string to be trimmed.
 * @returns A new string with trailing whitespace removed.
 */
export function trim_right(input: string): string {
    return input.replace(/\s+$/, '');
}

/**
 * Removes all whitespace characters from the given input string.
 *
 * @param input - The string from which to remove all whitespace.
 * @returns A new string with all whitespace characters removed.
 */
export function remove_whitespace(input: string): string {
    return input.replace(/\s+/g, '');
}

/**
 * Normalizes whitespace in a given string by replacing all sequences of
 * whitespace characters with a single space.
 *
 * @param input - The input string to normalize.
 * @returns A new string with normalized whitespace.
 */
export function normalize_spaces(input: string): string {
    return input.replace(/\s+/g, ' ');
}