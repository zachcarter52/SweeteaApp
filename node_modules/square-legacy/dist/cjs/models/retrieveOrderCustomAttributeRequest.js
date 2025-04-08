"use strict";
exports.__esModule = true;
exports.retrieveOrderCustomAttributeRequestSchema = void 0;
var schema_1 = require("../schema");
exports.retrieveOrderCustomAttributeRequestSchema = (0, schema_1.object)({
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    withDefinition: ['with_definition', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=retrieveOrderCustomAttributeRequest.js.map