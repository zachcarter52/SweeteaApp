"use strict";
exports.__esModule = true;
exports.listWorkweekConfigsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listWorkweekConfigsRequestSchema = (0, schema_1.object)({
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listWorkweekConfigsRequest.js.map