"use strict";
exports.__esModule = true;
exports.bulkDeleteLocationCustomAttributesRequestSchema = void 0;
var schema_1 = require("../schema");
var bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest_1 = require("./bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest");
exports.bulkDeleteLocationCustomAttributesRequestSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.dict)((0, schema_1.lazy)(function () {
            return bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest_1.bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema;
        })),
    ]
});
//# sourceMappingURL=bulkDeleteLocationCustomAttributesRequest.js.map