"use strict";
exports.__esModule = true;
exports.catalogIdMappingSchema = void 0;
var schema_1 = require("../schema");
exports.catalogIdMappingSchema = (0, schema_1.object)({
    clientObjectId: ['client_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    objectId: ['object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=catalogIdMapping.js.map