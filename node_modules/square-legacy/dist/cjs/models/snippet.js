"use strict";
exports.__esModule = true;
exports.snippetSchema = void 0;
var schema_1 = require("../schema");
exports.snippetSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    siteId: ['site_id', (0, schema_1.optional)((0, schema_1.string)())],
    content: ['content', (0, schema_1.string)()],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=snippet.js.map