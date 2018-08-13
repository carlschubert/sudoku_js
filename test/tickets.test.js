const assert = require('chai').assert;
const _ = require('underscore');
const tickets = require('../src/tickets.js');


let T1 = [25, 100] // NO
let T2 = [25,25,50,100,25,50,25,100,25,25,25,100]  // YES
let T3 = [25,25,25,100,25,50,25,100,25,50,25,100] // YES
let T4 = [25,50,25,100,25,25,25,100,25,50,25,100,25,50,25,100,25,25,25,100] // YES

describe('tickets', function() {
  it('should return a solved board given a solved Board', function() {
    console.log(tickets.check(T1))
    assert.deepEqual(tickets.check(T1), "NO")
  })

  it('should return a solved board given a solvable board', function() {
    console.log(tickets.check(T2))
    assert.deepEqual(tickets.check(T2), "YES")
  })

  it('should return a false given a unsolvable board', function() {
    console.log(tickets.check(T3))
    assert.deepEqual(tickets.check(T3), "YES")
  })

  it('should return a solved board given a solvable board', function() {
    console.log(tickets.check(T4))
    assert.deepEqual(tickets.check(T4), "YES")
  })
})
