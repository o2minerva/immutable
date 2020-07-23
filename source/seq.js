// Seq

const { Seq } = require('immutable')
const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  .filter(x => x % 2 !== 0)
  .map(x => x * x)

// Seq.Keyed

// Seq.Keyed<K, V>(collection: Iterable<[K, V]>): Seq.Keyed<K, V>
// Seq.Keyed<V>(obj: {[key: string]: V}): Seq.Keyed<string, V>
// Seq.Keyed<K, V>(): Seq.Keyed<K, V>
// Seq.Keyed(): Seq.Keyed<any, any>

// Seq.Indexed

// Seq.Indexed(): Seq.Indexed<any>
// Seq.Indexed<T>(): Seq.Indexed<T>
// Seq.Indexed<T>(collection: Iterable<T>): Seq.Indexed<T>

// Seq.Set

// Seq.Set(): Seq.Set<any>
// Seq.Set<T>(): Seq.Set<T>
// Seq.Set<T>(collection: Iterable<T>): Seq.Set<T>
