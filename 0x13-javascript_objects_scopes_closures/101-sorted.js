#!/usr/bin/node
const data = require('./101-data');

const dict = data.dict;
const sortedDict = {};

for (const userId in dict) {
  const occurrences = dict[userId];

  if (!sortedDict[occurrences]) {
    sortedDict[occurrences] = [];
  }

  sortedDict[occurrences].push(userId);
}

console.log(sortedDict);
