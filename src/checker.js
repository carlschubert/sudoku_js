// board => boolean
// returns true if the board is solvable and false if it it unsolvable.
function checkBoard(board) {
  return checkRows(board, selectHorizontal)
  && checkRows(board, selectVertical)
  && checkRows(board, selectZone)
}
exports.checkBoard = checkBoard;

function selectHorizontal(i, j) {
    return Math.floor(j/9) === i
}
exports.selectHorizontal = selectHorizontal

function selectVertical(i, j) {
    return j%9 === i
}
exports.selectVertical = selectVertical

function selectZone(i, j) {
    return Math.floor(j/27) === Math.floor(i/3) && Math.floor((j%9)/3) === Math.floor(i/3)
}
exports.selectZone = selectZone

//board, callback => groups
// break board into groups of nine based on callback
function formatBoard(board, conditionCB) {
  let groups = []
  for(var i = 0; i <= 8; i++) {
    var row = [];
    for (var j=0; j < board.length; j++) {
      if (conditionCB(i, j)) {
        row.push(board[j])
      }
    }
    groups.push(row)
  }
  return groups
}
exports.formatBoard = formatBoard;

function checkRows(board, cb) {
  let groups = formatBoard(board, function(i, j) {
    return cb(i, j)
  })
  return !groups.some(checkRowForDuplicates)
}
exports.checkRows = checkRows;

// row => boolean
// checks a row to see if there are any duplicate values
function checkRowForDuplicates(row) {
  var rowSortedNoNulls = row.filter(function(item) {
    return item !== null;
  }).sort();

  var lastNum;
  for (var i = 0; i <= rowSortedNoNulls.length; i++) {
    if (lastNum === rowSortedNoNulls[i]) {
      return true;
    }
    lastNum = rowSortedNoNulls[i]
  }
  return false;
}
exports.checkRowForDuplicates = checkRowForDuplicates;
