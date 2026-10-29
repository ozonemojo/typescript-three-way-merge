/**
 * Merge three pre-sorted integer arrays into ascending order.
 *
 * Preconditions:
 * - collection1 is sorted ascending.
 * - collection2 is sorted descending.
 * - collection3 is sorted ascending.
 *
 * Does not call sort() or use any sorting function.
 * Time: O(n), where n is the total number of elements.
 * Extra space: O(n) for the returned array.
 */
export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = collection2.length - 1; // Read descending input backwards.
  let k = 0;

  while (
    i < collection1.length ||
    j >= 0 ||
    k < collection3.length
  ) {
    let source = 0;
    let smallest = Infinity;

    if (i < collection1.length && collection1[i] < smallest) {
      smallest = collection1[i];
      source = 1;
    }

    if (j >= 0 && collection2[j] < smallest) {
      smallest = collection2[j];
      source = 2;
    }

    if (k < collection3.length && collection3[k] < smallest) {
      smallest = collection3[k];
      source = 3;
    }

    result.push(smallest);

    if (source === 1) {
      i++;
    } else if (source === 2) {
      j--;
    } else if (source === 3) {
      k++;
    }
  }

  return result;
}
