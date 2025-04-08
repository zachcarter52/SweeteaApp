"use strict";
exports.__esModule = true;
exports.createTerminalRefundRequestSchema = void 0;
var schema_1 = require("../schema");
var terminalRefund_1 = require("./terminalRefund");
exports.createTerminalRefundRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    refund: ['refund', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalRefund_1.terminalRefundSchema; }))]
});
//# sourceMappingURL=createTerminalRefundRequest.js.map