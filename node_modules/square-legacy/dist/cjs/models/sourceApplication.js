"use strict";
exports.__esModule = true;
exports.sourceApplicationSchema = void 0;
var schema_1 = require("../schema");
exports.sourceApplicationSchema = (0, schema_1.object)({
    product: ['product', (0, schema_1.optional)((0, schema_1.string)())],
    applicationId: ['application_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=sourceApplication.js.map