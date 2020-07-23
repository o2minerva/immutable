// get<K, V>(collection: Collection<K, V>, key: K): V | undefined
// get<K, V, NSV>(collection: Collection<K, V>, key: K, notSetValue: NSV): V | NSV
// get<TProps, K>(record: Record<TProps>, key: K, notSetValue: any): TProps[K]
// get<V>(collection: Array<V>, key: number): V | undefined
// get<V, NSV>(collection: Array<V>, key: number, notSetValue: NSV): V | NSV
// get<C, K>(object: C, key: K, notSetValue: any): C[K]
// get<V>(collection: {[key: string]: V}, key: string): V | undefined
// get<V, NSV>(
// collection: {[key: string]: V},
// key: string,
// notSetValue: NSV
// ): V | NSV

const { get } = require("immutable");
get(["dog", "frog", "cat"], 2); // 'frog'
get({ x: 123, y: 456 }, "x"); // 123
get({ x: 123, y: 456 }, "z", "ifNotSet"); // 'ifNotSet'
