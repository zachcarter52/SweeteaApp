"use strict";
exports.__esModule = true;
exports.bulkUpsertOrderCustomAttributesRequestSchema = void 0;
var schema_1 = require("../schema");
var bulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute_1 = require("./bulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute");
exports.bulkUpsertOrderCustomAttributesRequestSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.dict)((0, schema_1.lazy)(function () {
            return bulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute_1.bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema;
        })),
    ]
});
//# sourceMappingURL=bulkUpsertOrderCustomAttributesRequest.js.map