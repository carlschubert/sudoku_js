
// board.
// a board is an array of numbers with a length of 81.  The numbers can be
// 1-9 or null

// board => board or false
// takes a board and returns a solved board or false
function solve(board) {

}

// board => boolean
// returns true if the board is solvable and false if it it unsolvable.
function checkBoard(board) {
  return checkHorizontal(board) && checkVertical(board) && checkZone(board)
}
exports.checkBoard = checkBoard;

// board => boolean
// returns true the numbers 1 - 9 only appear once each in each row.  nulls are aloud
function checkHorizontal(board) {

  for(var i = 0; i <= 8; i++) {
    var row = [];
    for (var j=0; j <= board.length; j++) {
      if (Math.floor(j/9) === i) {
        row.push(board[j])
      }
    }
    if (!checkRow(row)) {
      return false;
    }
  }
  return true;
}
exports.checkHorizontal = checkHorizontal;

// board => boolean
// returns true the numbers 1 - 9 only appear once each in each vertical.  nulls are aloud
function checkVertical(board) {

  for(var i = 0; i <= 8; i++) {
    var row = [];
    for (var j=0; j < board.length; j++) {
      if (j%9 === i) {
        row.push(board[j])
      }
    }
    if (!checkRow(row)) {
      return false;
    }
  }
  return true;
}
exports.checkVertical = checkVertical;

// board => boolean
// returns true the numbers 1 - 9 only appear once each in each zone.  nulls are aloud
function checkZone(board) {

  for(var i = 0; i <= 8; i++) {
    var row = [];
    for (var j=0; j < board.length; j++) {
      if (Math.floor(j/27) === Math.floor(i/3) && Math.floor((j%9)/3) === Math.floor(i/3)) {
        row.push(board[j])
      }
    }
    if (!checkRow(row)) {
      return false;
    }
  }
  return true;
}
exports.checkZone = checkZone;


// row => boolean
// checks a row to see if there are any duplicate values
function checkRow(row) {
  var rowSortedNoNulls = row.filter(function(item) {
    return item !== null;
  }).sort();

  var lastNum;
  for (var i = 0; i <= rowSortedNoNulls.length; i++) {
    if (lastNum === rowSortedNoNulls[i]) {
      return false;
    }
    lastNum = rowSortedNoNulls[i]
  }
  return true;
}
exports.checkRow = checkRow;
