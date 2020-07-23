// is

const { Map, is } = require('immutable')
const map1 = Map({ a: 1, b: 1, c: 1 })
const map2 = Map({ a: 1, b: 1, c: 1 })
assert.equal(map1 !== map2, true)
assert.equal(Object.is(map1, map2), false)
assert.equal(is(map1, map2), true)

// isImmutable()

const { isImmutable, Map, List, Stack } = require('immutable');
isImmutable([]); // false
isImmutable({}); // false
isImmutable(Map()); // true
isImmutable(List()); // true
isImmutable(Stack()); // true
isImmutable(Map().asMutable()); // true

// isCollection()

const { isCollection, Map, List, Stack } = require('immutable');
isCollection([]); // false
isCollection({}); // false
isCollection(Map()); // true
isCollection(List()); // true
isCollection(Stack()); // true

// isKeyed()

const { isKeyed, Map, List, Stack } = require('immutable');
isKeyed([]); // false
isKeyed({}); // false
isKeyed(Map()); // true
isKeyed(List()); // false
isKeyed(Stack()); // false

// isIndexed()

const { isIndexed, Map, List, Stack, Set } = require('immutable');
isIndexed([]); // false
isIndexed({}); // false
isIndexed(Map()); // false
isIndexed(List()); // true
isIndexed(Stack()); // true
isIndexed(Set()); // false

// isAssociative()

const { isAssociative, Map, List, Stack, Set } = require('immutable');
isAssociative([]); // false
isAssociative({}); // false
isAssociative(Map()); // true
isAssociative(List()); // true
isAssociative(Stack()); // true
isAssociative(Set()); // false

// isOrdered()

const { isOrdered, Map, OrderedMap, List, Set } = require('immutable');
isOrdered([]); // false
isOrdered({}); // false
isOrdered(Map()); // false
isOrdered(OrderedMap()); // true
isOrdered(List()); // true
isOrdered(Set()); // false

// isValueObject()
// isSeq()
// isList()
// isMap()
// isOrderedMap()
// isStack()
// isSet()
// isOrderedSet()
// isRecord()


























