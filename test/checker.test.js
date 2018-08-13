/*
const assert = require('chai').assert;
const sudokuChecker = require('../src/checker.js');

//solved
var BR1 = [
  1,2,3,4,5,6,7,8,9,
  5,7,8,1,3,9,6,2,4,
  4,9,6,8,7,2,1,5,3,
  9,5,2,3,8,1,4,6,7,
  6,4,1,2,9,7,8,3,5,
  3,8,7,5,6,4,2,9,1,
  7,1,9,6,2,3,5,4,8,
  8,6,4,9,1,5,3,7,2,
  2,3,5,7,4,8,9,1,6
]

//solvable
var BR2 = [
  1,null,3,4,5,null,7,8,9,
  5,7,8,null,3,9,6,null,4,
  4,null,6,8,7,2,1,5,3,
  9,5,null,3,8,1,4,null,7,
  6,null,1,null,9,7,8,3,5,
  3,8,null,5,6,4,null,9,1,
  7,1,null,6,2,null,5,4,8,
  8,6,4,9,null,5,3,null,2,
  2,null,5,7,4,8,null,1,6
]

//unsolvable
var BR3 = [
 1,null,3,4,5,null,9,8,9,
 5,7,8,null,3,9,6,null,4,
 4,null,6,8,7,2,1,5,3,
 9,5,null,3,8,1,4,null,7,
 6,null,1,null,9,7,8,3,5,
 3,8,null,5,6,4,null,9,1,
 7,1,null,6,2,null,5,4,8,
 8,6,4,9,null,5,3,null,2,
 2,null,5,7,4,8,null,1,6
]

//unsolvable horizontal
var BR4 = [
  1,null,null,null,null,null,null,null,1,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
]

//unsolvable vertical
var BR5 = [
  1,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  1,null,null,null,null,null,null,null,null,
]

//unsolvable zone
var BR6 = [
  1,1,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
  null,null,null,null,null,null,null,null,null,
]

// result board
var BR7 = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9]
]

// a zone board
var BR8 = [
  1,2,3,1,2,3,1,2,3,
  4,5,6,4,5,6,4,5,6,
  7,8,9,7,8,9,7,8,9,
  1,2,3,1,2,3,1,2,3,
  4,5,6,4,5,6,4,5,6,
  7,8,9,7,8,9,7,8,9,
  1,2,3,1,2,3,1,2,3,
  4,5,6,4,5,6,4,5,6,
  7,8,9,7,8,9,7,8,9
]

describe('checkBoard', function() {
  it('should return true given a solved board', function() {
    assert.isTrue(sudokuChecker.checkBoard(BR1))
  })

  it('should return true given a solvable board', function() {
    assert.isTrue(sudokuChecker.checkBoard(BR2))
  })

  it('should return false given a unsolvable board', function() {
    assert.isFalse(sudokuChecker.checkBoard(BR3))
  })
})

describe('checkRows Horizontal', function() {
  it('should return true given a solved board', function() {
    assert.isTrue(sudokuChecker.checkRows(BR1, sudokuChecker.selectHorizontal))
  })

  it('should return true given a solvable board', function() {
    assert.isTrue(sudokuChecker.checkRows(BR2, sudokuChecker.selectHorizontal))
  })

  it('should return false given a unsolvable board violating the horizontal rule', function() {
    assert.isFalse(sudokuChecker.checkRows(BR4, sudokuChecker.selectHorizontal))
  })
})

describe('checkVertical', function() {
  it('should return true given a solved board', function() {
    assert.isTrue(sudokuChecker.checkRows(BR1, sudokuChecker.selectVertical))
  })

  it('should return true given a solvable board', function() {
    assert.isTrue(sudokuChecker.checkRows(BR2, sudokuChecker.selectVertical))
  })

  it('should return false given a simple unsolvable board violating the vertical rule', function() {
    assert.isFalse(sudokuChecker.checkRows(BR5, sudokuChecker.selectVertical))
  })
})

describe('checkZone', function() {
  it('should return true given a solved board', function() {
    assert.isTrue(sudokuChecker.checkRows(BR1, sudokuChecker.selectZone))
  })

  it('should return true given a solvable board', function() {
    assert.isTrue(sudokuChecker.checkRows(BR2, sudokuChecker.selectZone))
  })

  it('should return false given a simple unsolvable board violating the zone rule', function() {
    assert.isFalse(sudokuChecker.checkRows(BR6, sudokuChecker.selectZone))
  })
})

describe('formatBoard', function() {
  it('should format the board correctelly give the zone callback', function() {
    assert.deepEqual(sudokuChecker.formatBoard(BR8, function(i, j) {
      return Math.floor(j/27) === Math.floor(i/3) && Math.floor((j%9)/3) === Math.floor(i/3)
    }), BR7)
  })
})

describe('checkRowForDuplicates', function() {
  it('should return false given a row without duplicates', function() {
    assert.isFalse(sudokuChecker.checkRowForDuplicates([1,2,3,4,5,6,7,8,9]))
  })

  it('should return false given a row without duplicates that includes nulls', function() {
    assert.isFalse(sudokuChecker.checkRowForDuplicates([1,2,null,4,5,6,7,null,9]))
  })

  it('should return false given a row with duplicates', function() {
    assert.isTrue(sudokuChecker.checkRowForDuplicates([1,2,3,4,5,6,7,9,9]))
  })

  it('should return true given a row with duplicates that includes nulls', function() {
    assert.isTrue(sudokuChecker.checkRowForDuplicates([1,2,1,4,5,6,7,null,9]))
  })
})
*/
