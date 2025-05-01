/**
 * Tokenizes a string using the Byte-Pair Encoding (BPE) algorithm.
 * @param str The string to tokenize.
 * @param numMerges The number of merge operations to perform.
 * @returns A generator that yields tokens one by one.
 */
export function* string_token(str: string, numMerges: number): Generator<string> | undefined {
    if (!str || numMerges <= 0) {
        return undefined;
    }

    let tokens = str.split('').map(char => char); // Start with individual characters as tokens
    const tokenPairs = new Map<string, number>();

    for (let merge = 0; merge < numMerges; merge++) {
        // Count occurrences of adjacent token pairs
        tokenPairs.clear();
        for (let i = 0; i < tokens.length - 1; i++) {
            const pair = tokens[i] + tokens[i + 1];
            tokenPairs.set(pair, (tokenPairs.get(pair) || 0) + 1);
        }

        // Find the most frequent pair
        let mostFrequentPair: string | null = null;
        let maxCount = 0;
        for (const [pair, count] of tokenPairs) {
            if (count > maxCount) {
                mostFrequentPair = pair;
                maxCount = count;
            }
        }

        if (!mostFrequentPair) {
            break; // No more pairs to merge
        }

        // Merge the most frequent pair in the token list
        const newTokens: string[] = [];
        let i = 0;
        while (i < tokens.length) {
            if (i < tokens.length - 1 && tokens[i] + tokens[i + 1] === mostFrequentPair) {
                newTokens.push(mostFrequentPair); // Merge the pair
                i += 2; // Skip the next token
            } else {
                newTokens.push(tokens[i]);
                i++;
            }
        }
        tokens = newTokens;
    }

    // Yield the final tokens
    for (const token of tokens) {
        yield token;
    }
}

/**
 * Calculates the Levenshtein distance (edit distance) between two strings.
 * @param s1 The first string.
 * @param s2 The second string.
 * @returns The Levenshtein distance between the two strings.
 */
export function levenshtein_distance(s1: string, s2: string): number {
    const len1 = s1.length;
    const len2 = s2.length;

    // Create a 2D array to store distances
    const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    // Initialize the base cases
    for (let i = 0; i <= len1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= len2; j++) {
        dp[0][j] = j;
    }

    // Fill the DP table
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1, // Deletion
                dp[i][j - 1] + 1, // Insertion
                dp[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    return dp[len1][len2];
}

/**
 * Implements a simple Cuckoo Hashing mechanism for strings.
 * @param str The string to hash.
 * @param tableSize The size of the hash table.
 * @returns The index in the hash table where the string is placed.
 */
export function string_hash(str: string, tableSize: number): number {
    if (tableSize <= 0) {
        throw new Error("Table size must be greater than 0");
    }

    // Two hash functions
    const hash1 = (s: string) => {
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash = (hash * 31 + s.charCodeAt(i)) % tableSize;
        }
        return hash;
    };

    const hash2 = (s: string) => {
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash = (hash * 37 + s.charCodeAt(i)) % tableSize;
        }
        return hash;
    };

    // Compute both hash values
    const index1 = hash1(str);
    const index2 = hash2(str);

    // Return one of the indices (in a real implementation, you'd handle collisions)
    return Math.min(index1, index2); // Example: pick the smaller index
}

/**
 * Checks if two strings are anagrams of each other.
 * @param str1 The first string.
 * @param str2 The second string.
 * @returns True if the strings are anagrams, false otherwise.
 */
export function is_anagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = new Map<string, number>();

    for (const char of str1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of str2) {
        if (!charCount.has(char)) {
            return false;
        }
        charCount.set(char, charCount.get(char)! - 1);
        if (charCount.get(char) === 0) {
            charCount.delete(char);
        }
    }

    return charCount.size === 0;
}

/**
 * Finds the longest word in a given string.
 * @param str The input string.
 * @returns The longest word in the string. If there are multiple words of the same maximum length, the first one is returned.
 */
export function find_longest_word(str: string): string {
    if (!str) {
        return "";
    }

    const words = str.split(/\s+/); // Split the string into words using whitespace as a delimiter
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

/**
 * Calculates the frequency of each word in a given string.
 * @param str The input string.
 * @returns A Map where the keys are words and the values are their frequencies.
 */
export function word_frequency(str: string): Map<string, number> {
    if (!str) {
        return new Map();
    }

    const wordCounts = new Map<string, number>();
    const words = str.split(/\s+/); // Split the string into words using whitespace as a delimiter

    for (const word of words) {
        const normalizedWord = word.toLowerCase(); // Normalize to lowercase
        wordCounts.set(normalizedWord, (wordCounts.get(normalizedWord) || 0) + 1);
    }

    return wordCounts;
}

/**
 * Randomly rearranges the characters in a string using the Fisher-Yates shuffle algorithm.
 * @param str The input string.
 * @returns A new string with the characters shuffled.
 */
export function shuffle_string(str: string): string {
    if (!str) {
        return "";
    }

    const characters = str.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]]; // Swap
    }

    return characters.join('');
}

/**
 * Encodes a string using the Caesar cipher algorithm.
 * @param str The input string to encode.
 * @param shift The number of positions to shift each character.
 * @returns The encoded string.
 */
export function encode_caesar_cipher(str: string, shift: number): string {
    if (!str) {
        return "";
    }

    const normalizedShift = shift % 26; // Normalize shift to stay within the alphabet range
    return str
        .split('')
        .map(char => {
            if (char >= 'a' && char <= 'z') {
                // Shift lowercase letters
                return String.fromCharCode(((char.charCodeAt(0) - 97 + normalizedShift + 26) % 26) + 97);
            } else if (char >= 'A' && char <= 'Z') {
                // Shift uppercase letters
                return String.fromCharCode(((char.charCodeAt(0) - 65 + normalizedShift + 26) % 26) + 65);
            } else {
                // Non-alphabetic characters remain unchanged
                return char;
            }
        })
        .join('');
}

/**
 * Decodes a string encoded with the Caesar cipher algorithm.
 * @param str The encoded string to decode.
 * @param shift The number of positions to shift each character back.
 * @returns The decoded string.
 */
export function decode_caesar_cipher(str: string, shift: number): string {
    if (!str) {
        return "";
    }

    const normalizedShift = shift % 26; // Normalize shift to stay within the alphabet range
    return str
        .split('')
        .map(char => {
            if (char >= 'a' && char <= 'z') {
                // Shift lowercase letters back
                return String.fromCharCode(((char.charCodeAt(0) - 97 - normalizedShift + 26) % 26) + 97);
            } else if (char >= 'A' && char <= 'Z') {
                // Shift uppercase letters back
                return String.fromCharCode(((char.charCodeAt(0) - 65 - normalizedShift + 26) % 26) + 65);
            } else {
                // Non-alphabetic characters remain unchanged
                return char;
            }
        })
        .join('');
}