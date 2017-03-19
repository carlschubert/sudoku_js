const assert = require('chai').assert;
const sudokuSolver = require('../src/index.js');


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

describe('checkBoard', function() {
  it('should return true given a solved board', function() {
    assert.isTrue(sudokuSolver.checkBoard(BR1))
  })

  it('should return true given a solvable board', function() {
    assert.isTrue(sudokuSolver.checkBoard(BR2))
  })

  it('should return false given a unsolvable board', function() {
    assert.isFalse(sudokuSolver.checkBoard(BR3))
  })
})

describe('checkHorizontal', function() {
  it('should return true given a solved board', function() {
    assert.isTrue(sudokuSolver.checkHorizontal(BR1))
  })

  it('should return true given a solvable board', function() {
    assert.isTrue(sudokuSolver.checkHorizontal(BR2))
  })

  it('should return false given a unsolvable board violating the horizontal rule', function() {
    assert.isFalse(sudokuSolver.checkHorizontal(BR4))
  })
})

describe('checkVertical', function() {
  it('should return true given a solved board', function() {
    assert.isTrue(sudokuSolver.checkVertical(BR1))
  })

  it('should return true given a solvable board', function() {
    assert.isTrue(sudokuSolver.checkVertical(BR2))
  })

  it('should return false given a simple unsolvable board violating the vertical rule', function() {
    assert.isFalse(sudokuSolver.checkVertical(BR5))
  })
})

describe('checkZone', function() {
  it('should return true given a solved board', function() {
    assert.isTrue(sudokuSolver.checkZone(BR1))
  })

  it('should return true given a solvable board', function() {
    assert.isTrue(sudokuSolver.checkZone(BR2))
  })

  it('should return false given a simple unsolvable board violating the zone rule', function() {
    assert.isFalse(sudokuSolver.checkZone(BR6))
  })
})

describe('checkRow', function() {
  it('should return true given a solved row', function() {
    assert.isTrue(sudokuSolver.checkRow([1,2,3,4,5,6,7,8,9]))
  })

  it('should return true given a solvable row', function() {
    assert.isTrue(sudokuSolver.checkRow([1,2,null,4,5,6,7,null,9]))
  })

  it('should return false given a unsolvable incomplete row', function() {
    assert.isFalse(sudokuSolver.checkRow([1,2,1,4,5,6,7,null,9]))
  })

  it('should return false given a unsolvable complete row', function() {
    assert.isFalse(sudokuSolver.checkRow([1,2,3,4,5,6,7,9,9]))
  })
})
