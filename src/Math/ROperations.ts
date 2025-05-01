// Basic Math Utilities Module
// This module provides basic mathematical operations such as addition, subtraction, multiplication, division, modulus, and power.

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export function modulus(a: number, b: number): number {
    return a % b;
}

export function power(a: number, b: number): number {
    return Math.pow(a, b);
}