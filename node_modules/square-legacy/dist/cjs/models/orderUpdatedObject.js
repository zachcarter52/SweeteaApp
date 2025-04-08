"use strict";
exports.__esModule = true;
exports.orderUpdatedObjectSchema = void 0;
var schema_1 = require("../schema");
var orderUpdated_1 = require("./orderUpdated");
exports.orderUpdatedObjectSchema = (0, schema_1.object)({
    orderUpdated: ['order_updated', (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderUpdated_1.orderUpdatedSchema; }))]
});
//# sourceMappingURL=orderUpdatedObject.js.map