// fromJS(
//   jsValue: any,
//   reviver?: (
//   key: string | number,
//   sequence: Collection.Keyed<string, any> | Collection.Indexed<any>,
//   path?: Array<string | number>
//   ) => any
//   ): any

const { fromJS, isKeyed } = require('immutable')
fromJS({ a: {b: [10, 20, 30]}, c: 40}, function (key, value, path) {
  console.log(key, value, path)
  return isKeyed(value) ? value.toOrderedMap() : value.toList()
})
