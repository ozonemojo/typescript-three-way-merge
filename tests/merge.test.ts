import { merge } from '../src/merge';

describe('merge', () => {
  it('merges three non-empty collections into ascending order', () => {
    expect(merge(
      [1, 4, 7, 10],
      [9, 6, 3, 0],
      [2, 5, 8, 11]
    )).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it('handles empty collections', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 3], [], [2, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
  });

  it('handles one collection at a time', () => {
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
    expect(merge([], [], [-2, 0, 4])).toEqual([-2, 0, 4]);
  });

  it('handles duplicates across and within collections', () => {
    expect(merge([1, 2, 2], [3, 2, 1], [1, 2, 4])).toEqual([
      1, 1, 1, 2, 2, 2, 2, 3, 4
    ]);
  });

  it('handles negative numbers and zero', () => {
    expect(merge([-8, -2, 3], [4, 0, -5], [-7, 1, 9])).toEqual([
      -8, -7, -5, -2, 0, 1, 3, 4, 9
    ]);
  });

  it('handles already ordered values and equal values', () => {
    expect(merge([1, 2], [2, 1], [2, 3])).toEqual([1, 1, 2, 2, 2, 3]);
  });

  it('does not mutate input collections', () => {
    const a = [1, 3, 5];
    const b = [6, 4, 2];
    const c = [0, 7, 8];

    merge(a, b, c);

    expect(a).toEqual([1, 3, 5]);
    expect(b).toEqual([6, 4, 2]);
    expect(c).toEqual([0, 7, 8]);
  });
});
