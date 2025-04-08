"use strict";
exports.__esModule = true;
exports.retrieveMerchantCustomAttributeRequestSchema = void 0;
var schema_1 = require("../schema");
exports.retrieveMerchantCustomAttributeRequestSchema = (0, schema_1.object)({
    withDefinition: ['with_definition', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())]
});
//# sourceMappingURL=retrieveMerchantCustomAttributeRequest.js.map