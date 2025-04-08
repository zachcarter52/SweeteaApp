"use strict";
exports.__esModule = true;
exports.catalogObjectReferenceSchema = void 0;
var schema_1 = require("../schema");
exports.catalogObjectReferenceSchema = (0, schema_1.object)({
    objectId: ['object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))]
});
//# sourceMappingURL=catalogObjectReference.js.map