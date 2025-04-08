"use strict";
exports.__esModule = true;
exports.cancelTerminalRefundResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var terminalRefund_1 = require("./terminalRefund");
exports.cancelTerminalRefundResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    refund: ['refund', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalRefund_1.terminalRefundSchema; }))]
});
//# sourceMappingURL=cancelTerminalRefundResponse.js.map