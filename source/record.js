// Record

const { Record } = require('immutable')
const ABRecord = Record({ a: 1, b: 2 })
const myRecord = ABRecord({ b: 3 })

// Record.Factory

// makePerson is a Record Factory function
const makePerson = Record({ name: null, favoriteColor: 'unknown' });

// alan is a Record instance
const alan = makePerson({ name: 'Alan' });

// Use the Record API
console.log('Record API: ' + alan.get('name'))

// Or direct property access (Readonly)
console.log('property access: ' + alan.name)
