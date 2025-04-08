"use strict";
exports.__esModule = true;
exports.searchTerminalActionsRequestSchema = void 0;
var schema_1 = require("../schema");
var terminalActionQuery_1 = require("./terminalActionQuery");
exports.searchTerminalActionsRequestSchema = (0, schema_1.object)({
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalActionQuery_1.terminalActionQuerySchema; }))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())]
});
//# sourceMappingURL=searchTerminalActionsRequest.js.map