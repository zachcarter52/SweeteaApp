"use strict";
exports.__esModule = true;
exports.searchTerminalRefundsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var terminalRefund_1 = require("./terminalRefund");
exports.searchTerminalRefundsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    refunds: ['refunds', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return terminalRefund_1.terminalRefundSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchTerminalRefundsResponse.js.map