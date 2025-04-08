"use strict";
exports.__esModule = true;
exports.upsertCatalogObjectRequestSchema = void 0;
var schema_1 = require("../schema");
var catalogObject_1 = require("./catalogObject");
exports.upsertCatalogObjectRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    object: ['object', (0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; })]
});
//# sourceMappingURL=upsertCatalogObjectRequest.js.map