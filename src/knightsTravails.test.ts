import { 
  validateInput, 
  convertToNumber, 
  convertToString, 
  isValidMove, 
  knightsTravails 
} from './knightsTravails'

describe('is valid input', () => {

  test('should be true if input is valid', () => {
    expect(validateInput("A3", "b5")).toBeTruthy();
  });

  test('should be false if input is invalid', () => {
    expect(validateInput('a9', 'y5')).toBeFalsy();
  });
});

describe('convert', () => {

  test('should convert chess notation to numeric', () => {
    const expected = [5,7];
    expect(convertToNumber('e7')).toEqual(expect.arrayContaining(expected));
  });

  test('should convert numeric to chess notation', () => {
    const expected = 'B2';
    expect(convertToString([2,2])).toBe(expected);
  });
});

describe('is valid move', () => {
  const moves = [[1,1], [1,8], [8,8], [8,1], [4,5]];

  moves.map(move => {
    test(`should be true if co-ordinates ${move[0]},${move[1]} inside chess board`, () => {
      expect(isValidMove(move)).toBeTruthy();
    });
  })

  test('should be false if co-ordinates are outside chess board', () => {
    expect(isValidMove([-1,-8])).toBeFalsy();
  });
});

describe('knights travails', () => {
  const start = 'a8', end = 'b7';
  test(`should return shortest path from ${start} to ${end}`, () => {
    expect(knightsTravails(start, end)).toEqual(['B6', 'C4', 'D6', 'B7']);
  })

  test('should return empty array for same start and end', () => {
    expect(knightsTravails('a8', 'a8')).toEqual([]);
  })
});
