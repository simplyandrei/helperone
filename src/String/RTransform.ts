/**
 * Replaces all occurrences of a specific character in a string with another character.
 * 
 * @param input - The original string.
 * @param target - The character to be replaced.
 * @param replacement - The character to replace with.
 * @returns A new string with the target character replaced by the replacement character.
 */
export function replace_char(input: string, target: string, replacement: string): string {
    if (target.length !== 1 || replacement.length !== 1) {
        throw new Error("Both target and replacement must be single characters.");
    }
    return input.split(target).join(replacement);
}

/**
 * Removes all occurrences of a specific character in a string.
 * 
 * @param input - The original string.
 * @param charToRemove - The character to be removed.
 * @returns A new string with all occurrences of the specified character removed.
 */
export function remove_char(input: string, charToRemove: string): string {
    if (charToRemove.length !== 1) {
        throw new Error("charToRemove must be a single character.");
    }
    return input.split(charToRemove).join('');
}

/**
 * Removes all numeric digits from a string.
 * 
 * @param input - The original string.
 * @returns A new string with all numeric digits removed.
 */
export function remove_digits(input: string): string {
    return input.replace(/\d/g, '');
}

/**
 * Removes all alphabetic characters from a string.
 * 
 * @param input - The original string.
 * @returns A new string with all alphabetic characters removed.
 */
export function remove_alpha(input: string): string {
    return input.replace(/[a-zA-Z]/g, '');
}

/**
 * Removes all punctuation characters from a string.
 * 
 * @param input - The original string.
 * @returns A new string with all punctuation characters removed.
 */
export function remove_punctuation(input: string): string {
    return input.replace(/[.,!?;:'"(){}\[\]<>@#$%^&*~`|\\\/_-]/g, '');
}

/**
 * Removes the first occurrence of a specific substring in a string.
 * 
 * @param input - The original string.
 * @param substring - The substring to be removed.
 * @returns A new string with the first occurrence of the specified substring removed.
 */
export function remove_substring(input: string, substring: string): string {
    const index = input.indexOf(substring);
    if (index === -1) {
        return input; // Substring not found, return the original string
    }
    return input.slice(0, index) + input.slice(index + substring.length);
}

/**
 * Replaces the first occurrence of a specific substring in a string with another substring.
 * 
 * @param input - The original string.
 * @param oldSub - The substring to be replaced.
 * @param newSub - The substring to replace with.
 * @returns A new string with the first occurrence of the old substring replaced by the new substring.
 */
export function replace_substring(input: string, oldSub: string, newSub: string): string {
    const index = input.indexOf(oldSub);
    if (index === -1) {
        return input; // Substring not found, return the original string
    }
    return input.slice(0, index) + newSub + input.slice(index + oldSub.length);
}

/**
 * Reverses the order of words in a string.
 * 
 * @param input - The original string.
 * @returns A new string with the order of words reversed.
 */
export function reverse_words(input: string): string {
    return input.split(' ').reverse().join(' ');
}