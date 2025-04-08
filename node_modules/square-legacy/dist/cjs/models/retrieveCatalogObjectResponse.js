"use strict";
exports.__esModule = true;
exports.retrieveCatalogObjectResponseSchema = void 0;
var schema_1 = require("../schema");
var catalogObject_1 = require("./catalogObject");
var error_1 = require("./error");
exports.retrieveCatalogObjectResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    object: ['object', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; }))],
    relatedObjects: [
        'related_objects',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; }))),
    ]
});
//# sourceMappingURL=retrieveCatalogObjectResponse.js.map