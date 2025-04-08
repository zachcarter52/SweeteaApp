"use strict";
exports.__esModule = true;
exports.siteSchema = void 0;
var schema_1 = require("../schema");
exports.siteSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    siteTitle: ['site_title', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    domain: ['domain', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    isPublished: ['is_published', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=site.js.map