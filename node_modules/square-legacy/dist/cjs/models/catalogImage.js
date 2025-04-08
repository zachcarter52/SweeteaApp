"use strict";
exports.__esModule = true;
exports.catalogImageSchema = void 0;
var schema_1 = require("../schema");
exports.catalogImageSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    url: ['url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    caption: ['caption', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    photoStudioOrderId: ['photo_studio_order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=catalogImage.js.map