// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
// Each of them has a single 100, 50 or 25dollars bill. A "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

// Examples:

// === JavaScript ==



function check(line) {
  let change = [];
  for (let i = 0; i < line.length; i++) {
    if (hasChange(line[i], change)) {
      change.push(line[i])
      change = removeChange(line[i], change);
    } else {
      return "NO";
    }
  }
  return "YES";
}

function hasChange(customer, change) {
  if (customer === 25) {
    return true
  } else if (customer === 50) {
    return change.includes(25)
  } else {
    let numberOfTwentyFives = change.filter(bill => bill === 25).length;
    return (change.includes(50) && numberOfTwentyFives > 0) || (numberOfTwentyFives > 2);
  }
}

function removeChange(customer, change) {
  if (customer === 25) {
    return change
  } else if (customer === 50) {
    return removeAtValues([25], change)
  } else {
    return changeForHundred(change)
  }
}

function changeForHundred(change) {
  if (change.includes(50)) {
    return removeAtValues([50, 25], change)
  } else {
    return removeAtValues([25, 25, 25], change)
  }
}

function removeAtValues(toRemove, finalArr) {
  return finalArr.filter(x => toRemove.indexOf(x) < 0 )
}

exports.check = check;
