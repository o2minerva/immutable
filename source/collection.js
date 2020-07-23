// Collection

// Collection.Keyed

// Collection.Keyed<K, V>(collection: Iterable<[K, V]>): Collection.Keyed<K, V>
// Collection.Keyed<V>(obj: {[key: string]: V}): Collection.Keyed<string, V>

// Collection.Indexed

// Collection.Indexed<T>(collection: Iterable<T>): Collection.Indexed<T>

// Collection.Set

const { Collection } = require('immutable')
const seq = Collection.Set([ 'A', 'B', 'C' ])
// Seq { "A", "B", "C" }
seq.forEach((v, k) =>
 assert.equal(v, k)
)
