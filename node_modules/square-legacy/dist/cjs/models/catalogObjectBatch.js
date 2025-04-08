"use strict";
exports.__esModule = true;
exports.catalogObjectBatchSchema = void 0;
var schema_1 = require("../schema");
var catalogObject_1 = require("./catalogObject");
exports.catalogObjectBatchSchema = (0, schema_1.object)({
    objects: ['objects', (0, schema_1.array)((0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; }))]
});
//# sourceMappingURL=catalogObjectBatch.js.map