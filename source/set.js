// Set(): Set<any>
// Set<T>(): Set<T>
// Set<T>(collection: Iterable<T>): Set<T>


// set()

// set<K, V, C>(collection: C, key: K, value: V): C
// set<TProps, C, K>(record: C, key: K, value: TProps[K]): C
// set<V, C>(collection: C, key: number, value: V): C
// set<C, K>(object: C, key: K, value: C[K]): C
// set<V, C>(collection: C, key: string, value: V): C

const { set } = require('immutable')
const originalArray = [ 'dog', 'frog', 'cat' ]
set(originalArray, 1, 'cow') // [ 'dog', 'cow', 'cat' ]
console.log(originalArray) // [ 'dog', 'frog', 'cat' ]
const originalObject = { x: 123, y: 456 }
set(originalObject, 'x', 789) // { x: 789, y: 456 }
console.log(originalObject) // { x: 123, y: 456 }
