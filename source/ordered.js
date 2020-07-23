// OrderedMap

// OrderedMap<K, V>(collection: Iterable<[K, V]>): OrderedMap<K, V>
// OrderedMap<V>(obj: {[key: string]: V}): OrderedMap<string, V>
// OrderedMap<K, V>(): OrderedMap<K, V>
// OrderedMap(): OrderedMap<any, any>

let newOrderedMap = OrderedMap({key: "value"})
let newOrderedMap = OrderedMap([["key", "value"]])

// OrderedSet

// OrderedSet(): OrderedSet<any>
// OrderedSet<T>(): OrderedSet<T>
// OrderedSet<T>(collection: Iterable<T>): OrderedSet<T>
