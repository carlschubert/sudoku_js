
// board.

// a board is an array of numbers with a length of 81.  The numbers can be
// 1-9 or null

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


// board => board or false
// takes a board and returns a solved board or false
function solve(board) {

}

// board => boolean
// returns true if the board is solvable and false if it it unsolvable.

console.log("checkBoard should return true for BR1", checkBoard(BR1));
console.log("checkBoard should return true for BR2", checkBoard(BR2));
console.log("checkBoard should return false for BR3", checkBoard(BR3));

function checkBoard(board) {
  return checkHorizontal(board) && checkVertical(board) && checkZone(board)
}

// board => boolean
// returns true the numbers 1 - 9 only appear once each in each row.  nulls are aloud

console.log("checkHorizontal should return true for BR1", checkHorizontal(BR1));
console.log("checkHorizontal should return true for BR2", checkHorizontal(BR2));
console.log("checkHorizontal should return false for BR4", checkHorizontal(BR4));

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

// board => boolean
// returns true the numbers 1 - 9 only appear once each in each vertical.  nulls are aloud

console.log("checkVertical should return true for BR1", checkVertical(BR1));
console.log("checkVertical should return true for BR2", checkVertical(BR2));
console.log("checkVertical should return false for BR5", checkVertical(BR5));

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

// board => boolean
// returns true the numbers 1 - 9 only appear once each in each zone.  nulls are aloud

console.log("checkZone should return true for BR1", checkZone(BR1));
console.log("checkZone should return true for BR2", checkZone(BR2));
console.log("checkZone should return false for BR6", checkZone(BR6));

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

//

function checkRows() {

}

// row => boolean
// checks a row to see if there are any duplicate values

console.log("checkRow should return true", checkRow([1,2,3,4,5,6,7,8,9]));
console.log("checkRow should return true", checkRow([1,2,null,4,5,6,7,null,9]));
console.log("checkRow should return false", checkRow([1,2,1,4,5,6,7,null,9]));
console.log("checkRow should return false", checkRow([1,2,3,4,5,6,7,9,9]));

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
