// Swapping two value without making third temporary variable.
// I found this trick in a youtube short by `ThePrimeagen`.
// It's very impressive trick, where values are being swapped using XOR operator.

let a = 1
let b = 2

console.log(`Before Swapping:\na: ${a}\nb: ${b}`)

a = a^b
b = b^a
a = a^b

console.log(`After Swapping:\na: ${a}\nb: ${b}`)
