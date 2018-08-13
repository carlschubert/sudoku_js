const sudokuChecker = require('../src/checker.js');

// board.
// a board is an array of numbers with a length of 81.  The numbers can be
// 1-9 or null

// board => board or false
// takes a board and returns a solved board or false
function solve(board) {
  if (isSolved(board)) {
    return board
  } else {
    return solveBoards(generateValidBoards(board))
  }
}
exports.solve = solve;

// board => boolean
function isSolved(board) {
  return sudokuChecker.checkBoard(board) && !board.includes(null);
}

//boards => solved board or false
function solveBoards(boards) {
  if (boards.length === 0) {
    return false
  } else {
    let attempt = solve(boards[0]);
    if (attempt !== false) {
      return attempt;
    } else {
      return solveBoards(boards.slice(1));
    }
  }
}

//board => lob
function generateValidBoards(board) {
  let boards = [];
  for (let i = 1; i<=9; i++) {
    boards.push(fillWithNum(board.indexOf(null), i, board));
  }
  return boards.filter(board => sudokuChecker.checkBoard(board));
}

//index, board => board
function fillWithNum(index, num, board) {
  let filledBoard = board.slice(0)
  filledBoard[index] = num
  return filledBoard
}

// board => board or false
function solveBrute(board) {
  let stack = [board];
  while(stack[0] && !isSolved(stack[0])) {
    let current = stack.pop()
    stack = generateValidBoards(current).concat(stack)
  }
  return stack[0] ? stack[0] : false
}
exports.solveBrute = solveBrute;
