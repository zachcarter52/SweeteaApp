"use strict";
exports.__esModule = true;
exports.confirmationOptionsSchema = void 0;
var schema_1 = require("../schema");
var confirmationDecision_1 = require("./confirmationDecision");
exports.confirmationOptionsSchema = (0, schema_1.object)({
    title: ['title', (0, schema_1.string)()],
    body: ['body', (0, schema_1.string)()],
    agreeButtonText: ['agree_button_text', (0, schema_1.string)()],
    disagreeButtonText: ['disagree_button_text', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    decision: ['decision', (0, schema_1.optional)((0, schema_1.lazy)(function () { return confirmationDecision_1.confirmationDecisionSchema; }))]
});
//# sourceMappingURL=confirmationOptions.js.map