"use strict";
exports.__esModule = true;
exports.bulkUpsertLocationCustomAttributesRequestSchema = void 0;
var schema_1 = require("../schema");
var bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest_1 = require("./bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest");
exports.bulkUpsertLocationCustomAttributesRequestSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.dict)((0, schema_1.lazy)(function () {
            return bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest_1.bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema;
        })),
    ]
});
//# sourceMappingURL=bulkUpsertLocationCustomAttributesRequest.js.map