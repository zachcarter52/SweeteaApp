"use strict";
exports.__esModule = true;
exports.terminalCheckoutSchema = void 0;
var schema_1 = require("../schema");
var deviceCheckoutOptions_1 = require("./deviceCheckoutOptions");
var money_1 = require("./money");
var paymentOptions_1 = require("./paymentOptions");
exports.terminalCheckoutSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    paymentOptions: [
        'payment_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentOptions_1.paymentOptionsSchema; })),
    ],
    deviceOptions: ['device_options', (0, schema_1.lazy)(function () { return deviceCheckoutOptions_1.deviceCheckoutOptionsSchema; })],
    deadlineDuration: ['deadline_duration', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    cancelReason: ['cancel_reason', (0, schema_1.optional)((0, schema_1.string)())],
    paymentIds: ['payment_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    appId: ['app_id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())],
    paymentType: ['payment_type', (0, schema_1.optional)((0, schema_1.string)())],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    appFeeMoney: ['app_fee_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    statementDescriptionIdentifier: [
        'statement_description_identifier',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    tipMoney: ['tip_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=terminalCheckout.js.map