"use strict";
exports.__esModule = true;
exports.searchTerminalRefundsRequestSchema = void 0;
var schema_1 = require("../schema");
var terminalRefundQuery_1 = require("./terminalRefundQuery");
exports.searchTerminalRefundsRequestSchema = (0, schema_1.object)({
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalRefundQuery_1.terminalRefundQuerySchema; }))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())]
});
//# sourceMappingURL=searchTerminalRefundsRequest.js.map