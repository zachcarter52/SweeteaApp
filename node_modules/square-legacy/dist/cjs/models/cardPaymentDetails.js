"use strict";
exports.__esModule = true;
exports.cardPaymentDetailsSchema = void 0;
var schema_1 = require("../schema");
var card_1 = require("./card");
var cardPaymentTimeline_1 = require("./cardPaymentTimeline");
var deviceDetails_1 = require("./deviceDetails");
var error_1 = require("./error");
exports.cardPaymentDetailsSchema = (0, schema_1.object)({
    status: ['status', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    card: ['card', (0, schema_1.optional)((0, schema_1.lazy)(function () { return card_1.cardSchema; }))],
    entryMethod: ['entry_method', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cvvStatus: ['cvv_status', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    avsStatus: ['avs_status', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    authResultCode: ['auth_result_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    applicationIdentifier: [
        'application_identifier',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    applicationName: ['application_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    applicationCryptogram: [
        'application_cryptogram',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    verificationMethod: ['verification_method', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    verificationResults: ['verification_results', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    statementDescription: ['statement_description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    deviceDetails: ['device_details', (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceDetails_1.deviceDetailsSchema; }))],
    cardPaymentTimeline: [
        'card_payment_timeline',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return cardPaymentTimeline_1.cardPaymentTimelineSchema; })),
    ],
    refundRequiresCardPresence: [
        'refund_requires_card_presence',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; }))))]
});
//# sourceMappingURL=cardPaymentDetails.js.map