#!/usr/bin/env node

const data = require('./data');
const count = require('./count');

try {
  const result = count(data);
  console.log(JSON.stringify(result, null, 2));
} catch (err) {
  console.error('An error has occured:', err.message);
}
