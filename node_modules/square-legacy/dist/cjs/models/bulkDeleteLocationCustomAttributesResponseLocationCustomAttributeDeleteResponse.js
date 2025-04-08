"use strict";
exports.__esModule = true;
exports.bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema = (0, schema_1.object)({
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse.js.map