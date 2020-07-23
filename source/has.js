const { has } = require("immutable");
has(["dog", "frog", "cat"], 2); // true
has(["dog", "frog", "cat"], 5); // false
has({ x: 123, y: 456 }, "x"); // true
has({ x: 123, y: 456 }, "z"); // false
