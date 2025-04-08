"use strict";
exports.__esModule = true;
exports.createCatalogImageRequestSchema = void 0;
var schema_1 = require("../schema");
var catalogObject_1 = require("./catalogObject");
exports.createCatalogImageRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    objectId: ['object_id', (0, schema_1.optional)((0, schema_1.string)())],
    image: ['image', (0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; })],
    isPrimary: ['is_primary', (0, schema_1.optional)((0, schema_1.boolean)())]
});
//# sourceMappingURL=createCatalogImageRequest.js.map