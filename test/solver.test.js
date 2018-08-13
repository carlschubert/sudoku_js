/*
const assert = require('chai').assert;
const _ = require('underscore');
const sudokuSolver = require('../src/solver.js');

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

describe('solve', function() {
  it('should return a solved board given a solved Board', function() {
    assert.deepEqual(sudokuSolver.solve(BR1), BR1)
  })

  it('should return a solved board given a solvable board', function() {
    console.log('the diff is',_.difference(sudokuSolver.solve(BR2), BR1))
    assert.deepEqual(sudokuSolver.solve(BR2), BR1)
  })

  it('should return a false given a unsolvable board', function() {
    assert.deepEqual(sudokuSolver.solve(BR3), false)
  })
})

describe('solveIter', function() {
  it('should return a solved board given a solved Board', function() {
    assert.deepEqual(sudokuSolver.solveBrute(BR1), BR1)
  })

  it('should return a solved board given a solvable board', function() {
    assert.deepEqual(sudokuSolver.solveBrute(BR2), BR1)
  })

  it('should return a false given a unsolvable board', function() {
    assert.deepEqual(sudokuSolver.solveBrute(BR3), false)
  })
})
*/
