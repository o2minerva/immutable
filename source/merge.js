// merge

// merge<C>(
//   collection: C,
//   ...collections: Array<Iterable<any> | Iterable<[any, any]> | {[key: string]: any}>
//   ): C

const { merge } = require('immutable')
const original = { x: 123, y: 456 }
merge(original, { y: 789, z: 'abc' }) // { x: 123, y: 789, z: 'abc' }
console.log(original) // { x: 123, y: 456 }

// mergeWith()

// mergeWith<C>(
//   merger: (oldVal: any, newVal: any, key: any) => any,
//   collection: C,
//   ...collections: Array<Iterable<any> | Iterable<[any, any]> | {[key: string]: any}>
//   ): C

const { mergeWith } = require('immutable')
const original = { x: 123, y: 456 }
mergeWith(
  (oldVal, newVal) => oldVal + newVal,
  original,
  { y: 789, z: 'abc' }
) // { x: 123, y: 1245, z: 'abc' }
console.log(original) // { x: 123, y: 456 }

// mergeDeep()

// mergeDeep<C>(
//   collection: C,
//   ...collections: Array<Iterable<any> | Iterable<[any, any]> | {[key: string]: any}>
//   ): C

const { mergeDeep } = require('immutable')
const original = { x: { y: 123 }}
mergeDeep(original, { x: { z: 456 }}) // { x: { y: 123, z: 456 }}
console.log(original) // { x: { y: 123 }}

// mergeDeepWith()

// mergeDeepWith<C>(
//   merger: (oldVal: any, newVal: any, key: any) => any,
//   collection: C,
//   ...collections: Array<Iterable<any> | Iterable<[any, any]> | {[key: string]: any}>
//   ): C

const { mergeDeepWith } = require('immutable')
const original = { x: { y: 123 }}
mergeDeepWith(
  (oldVal, newVal) => oldVal + newVal,
  original,
  { x: { y: 456 }}
) // { x: { y: 579 }}
console.log(original) // { x: { y: 123 }}
