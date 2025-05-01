/**
 * Counts the occurrences of a specific character in a given string.
 *
 * @param input - The string in which to count the occurrences of the character.
 * @param char - The character to count. Must be a single character.
 * @returns The number of times the specified character appears in the input string.
 * @throws {Error} If the `char` parameter is not a single character.
 */
export function count_char(input: string, char: string): number {
    if (char.length !== 1) {
        throw new Error("The 'char' parameter must be a single character.");
    }

    return input.split('').reduce((count, currentChar) => {
        return currentChar === char ? count + 1 : count;
    }, 0);
}

/**
 * Counts the total number of words in a given string.
 *
 * @param input - The string in which to count the words.
 * @returns The total number of words in the input string.
 */
export function count_words(input: string): number {
    if (!input.trim()) {
        return 0;
    }

    return input.trim().split(/\s+/).length;
}

/**
 * Checks if the given string is a palindrome.
 *
 * @param input - The string to check.
 * @returns `true` if the input string is a palindrome, `false` otherwise.
 */
export function is_string_palindrome(input: string): boolean {
    const normalized = input.replace(/[\W_]/g, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}

/**
 * Finds the first index of a specific character in a given string.
 *
 * @param input - The string in which to search for the character.
 * @param char - The character to find. Must be a single character.
 * @returns The first index of the specified character, or -1 if the character is not found.
 * @throws {Error} If the `char` parameter is not a single character.
 */
export function find_char_index(input: string, char: string): number {
    if (char.length !== 1) {
        throw new Error("The 'char' parameter must be a single character.");
    }

    return input.indexOf(char);
}

/**
 * Finds the first index of a specific substring in a given string.
 *
 * @param input - The string in which to search for the substring.
 * @param substring - The substring to find.
 * @returns The first index of the specified substring, or -1 if the substring is not found.
 */
export function substring_index(input: string, substring: string): number {
    return input.indexOf(substring);
}

/**
 * Checks if the given string ends with the specified suffix.
 *
 * @param str - The string to check.
 * @param suffix - The suffix to look for.
 * @returns `true` if the string ends with the specified suffix, `false` otherwise.
 */
export function ends_with(str: string, suffix: string): boolean {
    return str.endsWith(suffix);
}

/**
 * Checks if the given string starts with the specified prefix.
 *
 * @param str - The string to check.
 * @param prefix - The prefix to look for.
 * @returns `true` if the string starts with the specified prefix, `false` otherwise.
 */
export function starts_with(str: string, prefix: string): boolean {
    return str.startsWith(prefix);
}

/**
 * Checks if the given string contains the specified substring.
 *
 * @param str - The string to check.
 * @param substring - The substring to look for.
 * @returns `true` if the string contains the specified substring, `false` otherwise.
 */
export function string_contains(str: string, substring: string): boolean {
    return str.includes(substring);
}