"use strict";
exports.__esModule = true;
exports.digitalWalletDetailsSchema = void 0;
var schema_1 = require("../schema");
var cashAppDetails_1 = require("./cashAppDetails");
exports.digitalWalletDetailsSchema = (0, schema_1.object)({
    status: ['status', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    brand: ['brand', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cashAppDetails: [
        'cash_app_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return cashAppDetails_1.cashAppDetailsSchema; })),
    ]
});
//# sourceMappingURL=digitalWalletDetails.js.map