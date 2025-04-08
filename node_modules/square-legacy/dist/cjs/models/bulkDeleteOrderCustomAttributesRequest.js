"use strict";
exports.__esModule = true;
exports.bulkDeleteOrderCustomAttributesRequestSchema = void 0;
var schema_1 = require("../schema");
var bulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute_1 = require("./bulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute");
exports.bulkDeleteOrderCustomAttributesRequestSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.dict)((0, schema_1.lazy)(function () {
            return bulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute_1.bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema;
        })),
    ]
});
//# sourceMappingURL=bulkDeleteOrderCustomAttributesRequest.js.map