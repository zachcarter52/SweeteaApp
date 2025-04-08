"use strict";
exports.__esModule = true;
exports.cancelTerminalActionResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var terminalAction_1 = require("./terminalAction");
exports.cancelTerminalActionResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    action: ['action', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalAction_1.terminalActionSchema; }))]
});
//# sourceMappingURL=cancelTerminalActionResponse.js.map