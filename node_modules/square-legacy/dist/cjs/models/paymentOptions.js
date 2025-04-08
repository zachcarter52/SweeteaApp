"use strict";
exports.__esModule = true;
exports.paymentOptionsSchema = void 0;
var schema_1 = require("../schema");
exports.paymentOptionsSchema = (0, schema_1.object)({
    autocomplete: ['autocomplete', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    delayDuration: ['delay_duration', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    acceptPartialAuthorization: [
        'accept_partial_authorization',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    delayAction: ['delay_action', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=paymentOptions.js.map