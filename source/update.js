// update<K, V, C>(collection: C, key: K, updater: (value: V) => V): C
// update<K, V, C, NSV>(
// collection: C,
// key: K,
// notSetValue: NSV,
// updater: (value: V | NSV) => V
// ): C
// update<TProps, C, K>(
// record: C,
// key: K,
// updater: (value: TProps[K]) => TProps[K]
// ): C
// update<TProps, C, K, NSV>(
// record: C,
// key: K,
// notSetValue: NSV,
// updater: (value: TProps[K] | NSV) => TProps[K]
// ): C
// update<V>(collection: Array<V>, key: number, updater: (value: V) => V): Array<V>
// update<V, NSV>(
// collection: Array<V>,
// key: number,
// notSetValue: NSV,
// updater: (value: V | NSV) => V
// ): Array<V>
// update<C, K>(object: C, key: K, updater: (value: C[K]) => C[K]): C
// update<C, K, NSV>(
// object: C,
// key: K,
// notSetValue: NSV,
// updater: (value: C[K] | NSV) => C[K]
// ): C
// update<V, C, K>(
// collection: C,
// key: K,
// updater: (value: V) => V
// ): {[key: string]: V}
// update<V, C, K, NSV>(
// collection: C,
// key: K,
// notSetValue: NSV,
// updater: (value: V | NSV) => V
// ): {[key: string]: V}

const { update } = require('immutable')
const originalArray = [ 'dog', 'frog', 'cat' ]
update(originalArray, 1, val => val.toUpperCase()) // [ 'dog', 'FROG', 'cat' ]
console.log(originalArray) // [ 'dog', 'frog', 'cat' ]
const originalObject = { x: 123, y: 456 }
update(originalObject, 'x', val => val * 6) // { x: 738, y: 456 }
console.log(originalObject) // { x: 123, y: 456 }
