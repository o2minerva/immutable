const { List, Set } = require('immutable');
const a = List([ 1, 2, 3 ]);
const b = List([ 1, 2, 3 ]);
assert.notStrictEqual(a, b); // different instances
const set = Set([ a ]);
assert.equal(set.has(b), true);
