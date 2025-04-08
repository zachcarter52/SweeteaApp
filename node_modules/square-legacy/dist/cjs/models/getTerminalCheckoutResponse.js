"use strict";
exports.__esModule = true;
exports.getTerminalCheckoutResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var terminalCheckout_1 = require("./terminalCheckout");
exports.getTerminalCheckoutResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    checkout: ['checkout', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalCheckout_1.terminalCheckoutSchema; }))]
});
//# sourceMappingURL=getTerminalCheckoutResponse.js.map