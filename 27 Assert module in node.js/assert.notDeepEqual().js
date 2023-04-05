const assert = require('assert')
const a = 10;
const b = '10'
assert.notDeepEqual(a, b, 'a and b are equal using(==)')
// if both value equal using (==) comparison then it will throw error