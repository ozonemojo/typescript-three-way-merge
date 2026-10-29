# TypeScript Three-Way Merge

Merge three arrays into one ascending array without calling `sort()` or any other sorting function.

## Input contract

- `collection1` is sorted ascending (minimum to maximum).
- `collection2` is sorted descending (maximum to minimum).
- `collection3` is sorted ascending (minimum to maximum).

The implementation preserves duplicate values and does not mutate the input arrays.

## Requirements

- Node.js 18 or newer
- npm (included with Node.js)

Check your installation:

```bash
node --version
npm --version
```

## Setup

From the project root, install dependencies:

```bash
npm install
```

## Build

```bash
npm run build
```

Compiled JavaScript is written to `dist/`.

## Run the example

```bash
npm start
```

Expected output:

```text
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9,
  10, 11
]
```

## Run unit tests

```bash
npm test
```

Run Jest in watch mode while developing:

```bash
npm run test:watch
```

## Function interface

```typescript
export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[]
```

Example:

```typescript
merge([1, 4, 7], [8, 5, 2], [3, 6, 9]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Algorithm

Keep one pointer at the next smallest unread value in each input:

- `collection1`: start at index `0`.
- `collection2`: start at its last index because the input is descending.
- `collection3`: start at index `0`.

At each step, compare the available values and append the smallest one. Advance only the pointer for the chosen array. Stop when all three arrays have been consumed.

## Complexity

Let `n` be the sum of the lengths of all three input arrays.

- Time: `O(n)`. Each output value requires at most three comparisons, and each pointer moves in only one direction.
- Output space: `O(n)` for the returned array.
- Additional working space: `O(1)`, excluding the returned array.

## Notes

The function assumes the input arrays satisfy the stated ordering contract. It does not validate whether the inputs are sorted.
