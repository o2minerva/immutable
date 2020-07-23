// getIn()

const { getIn } = require('immutable')
getIn({ x: { y: { z: 123 }}}, ['x', 'y', 'z']) // 123
getIn({ x: { y: { z: 123 }}}, ['x', 'q', 'p'], 'ifNotSet') // 'ifNotSet'

// hasIn()

const { hasIn } = require('immutable')
hasIn({ x: { y: { z: 123 }}}, ['x', 'y', 'z']) // true
hasIn({ x: { y: { z: 123 }}}, ['x', 'q', 'p']) // false

// removeIn()

const { removeIn } = require('immutable')
const original = { x: { y: { z: 123 }}}
removeIn(original, ['x', 'y', 'z']) // { x: { y: {}}}
console.log(original) // { x: { y: { z: 123 }}}

// setIn()

const { setIn } = require('immutable')
const original = { x: { y: { z: 123 }}}
setIn(original, ['x', 'y', 'z'], 456) // { x: { y: { z: 456 }}}
console.log(original) // { x: { y: { z: 123 }}}

// updateIn()

// updateIn<C>(
//   collection: C,
//   keyPath: Iterable<any>,
//   updater: (value: any) => any
//   ): C
//   updateIn<C>(
//   collection: C,
//   keyPath: Iterable<any>,
//   notSetValue: any,
//   updater: (value: any) => any
//   ): C

const { updateIn } = require('immutable')
const original = { x: { y: { z: 123 }}}
updateIn(original, ['x', 'y', 'z'], val => val * 6) // { x: { y: { z: 738 }}}
console.log(original) // { x: { y: { z: 123 }}}
