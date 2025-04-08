"use strict";
exports.__esModule = true;
exports.rangeSchema = void 0;
var schema_1 = require("../schema");
exports.rangeSchema = (0, schema_1.object)({
    min: ['min', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    max: ['max', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=range.js.map