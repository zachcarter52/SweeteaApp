"use strict";
exports.__esModule = true;
exports.createCardRequestSchema = void 0;
var schema_1 = require("../schema");
var card_1 = require("./card");
exports.createCardRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    sourceId: ['source_id', (0, schema_1.string)()],
    verificationToken: ['verification_token', (0, schema_1.optional)((0, schema_1.string)())],
    card: ['card', (0, schema_1.lazy)(function () { return card_1.cardSchema; })]
});
//# sourceMappingURL=createCardRequest.js.map