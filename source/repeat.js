const { Repeat } = require('immutable')
Repeat('foo') // [ 'foo', 'foo', 'foo', ... ]
Repeat('bar', 4) // [ 'bar', 'bar', 'bar', 'bar' ]
