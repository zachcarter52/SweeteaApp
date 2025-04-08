"use strict";
exports.__esModule = true;
exports.upsertSnippetResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var snippet_1 = require("./snippet");
exports.upsertSnippetResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    snippet: ['snippet', (0, schema_1.optional)((0, schema_1.lazy)(function () { return snippet_1.snippetSchema; }))]
});
//# sourceMappingURL=upsertSnippetResponse.js.map