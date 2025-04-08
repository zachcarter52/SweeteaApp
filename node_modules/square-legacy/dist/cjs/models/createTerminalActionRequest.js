"use strict";
exports.__esModule = true;
exports.createTerminalActionRequestSchema = void 0;
var schema_1 = require("../schema");
var terminalAction_1 = require("./terminalAction");
exports.createTerminalActionRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    action: ['action', (0, schema_1.lazy)(function () { return terminalAction_1.terminalActionSchema; })]
});
//# sourceMappingURL=createTerminalActionRequest.js.map