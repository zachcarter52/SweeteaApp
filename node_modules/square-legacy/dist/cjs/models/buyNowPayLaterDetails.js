"use strict";
exports.__esModule = true;
exports.buyNowPayLaterDetailsSchema = void 0;
var schema_1 = require("../schema");
var afterpayDetails_1 = require("./afterpayDetails");
var clearpayDetails_1 = require("./clearpayDetails");
exports.buyNowPayLaterDetailsSchema = (0, schema_1.object)({
    brand: ['brand', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    afterpayDetails: [
        'afterpay_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return afterpayDetails_1.afterpayDetailsSchema; })),
    ],
    clearpayDetails: [
        'clearpay_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return clearpayDetails_1.clearpayDetailsSchema; })),
    ]
});
//# sourceMappingURL=buyNowPayLaterDetails.js.map