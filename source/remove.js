// remove<K, C>(collection: C, key: K): C
// remove<TProps, C, K>(collection: C, key: K): C
// remove<C>(collection: C, key: number): C
// remove<C, K>(collection: C, key: K): C
// remove<C, K>(collection: C, key: K): C

const { remove } = require('immutable')
const originalArray = [ 'dog', 'frog', 'cat' ]
remove(originalArray, 1) // [ 'dog', 'cat' ]
console.log(originalArray) // [ 'dog', 'frog', 'cat' ]
const originalObject = { x: 123, y: 456 }
remove(originalObject, 'x') // { y: 456 }
console.log(originalObject) // { x: 123, y: 456 }
