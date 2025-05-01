export function to_uppercase(input: string): string {
    return input.toUpperCase();
}

/**
 * Converts the input string to lowercase.
 *
 * @param input - The string to be converted to lowercase.
 * @returns The input string converted to lowercase.
 */
export function to_lowercase(input: string): string {
    return input.toLowerCase();
}

/**
 * Capitalizes the first character of the input string.
 *
 * @param input - The string to be capitalized.
 * @returns The input string with the first character capitalized.
 */
export function capitalize(input: string): string {
    if (!input) return input;
    return input.charAt(0).toUpperCase() + input.slice(1);
}

/**
 * Capitalizes the first letter of each word in the input string.
 *
 * @param input - The string to be processed.
 * @returns The input string with the first letter of each word capitalized.
 */
export function capitalize_words(input: string): string {
    if (!input) return input;
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Toggles the case of each character in the input string.
 * Lowercase characters are converted to uppercase, and vice versa.
 *
 * @param input - The string to be processed.
 * @returns The input string with toggled case for each character.
 */
export function toggle_case(input: string): string {
    return input
        .split('')
        .map(char =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join('');
}