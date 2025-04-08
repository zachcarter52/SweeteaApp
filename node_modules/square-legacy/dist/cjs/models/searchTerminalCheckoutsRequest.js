"use strict";
exports.__esModule = true;
exports.searchTerminalCheckoutsRequestSchema = void 0;
var schema_1 = require("../schema");
var terminalCheckoutQuery_1 = require("./terminalCheckoutQuery");
exports.searchTerminalCheckoutsRequestSchema = (0, schema_1.object)({
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalCheckoutQuery_1.terminalCheckoutQuerySchema; }))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())]
});
//# sourceMappingURL=searchTerminalCheckoutsRequest.js.map