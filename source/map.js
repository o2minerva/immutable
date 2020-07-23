// Map<K, V>(collection: Iterable<[K, V]>): Map<K, V>
// Map<V>(obj: {[key: string]: V}): Map<string, V>
// Map<K, V>(): Map<K, V>
// Map(): Map<any, any>

const { Map } = require('immutable')
Map({ key: "value" })
Map([ [ "key", "value" ] ])

let obj = { 1: "one" }
Object.keys(obj) // [ "1" ]
assert.equal(obj["1"], obj[1]) // "one" === "one"

let map = Map(obj)
assert.notEqual(map.get("1"), map.get(1)) // "one" !== undefined
