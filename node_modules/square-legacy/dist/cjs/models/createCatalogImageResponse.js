"use strict";
exports.__esModule = true;
exports.createCatalogImageResponseSchema = void 0;
var schema_1 = require("../schema");
var catalogObject_1 = require("./catalogObject");
var error_1 = require("./error");
exports.createCatalogImageResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    image: ['image', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; }))]
});
//# sourceMappingURL=createCatalogImageResponse.js.map