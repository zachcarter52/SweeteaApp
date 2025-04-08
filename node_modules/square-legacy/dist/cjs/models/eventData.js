"use strict";
exports.__esModule = true;
exports.eventDataSchema = void 0;
var schema_1 = require("../schema");
exports.eventDataSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    deleted: ['deleted', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    object: ['object', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.unknown)())))]
});
//# sourceMappingURL=eventData.js.map