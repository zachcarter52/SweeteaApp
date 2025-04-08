"use strict";
exports.__esModule = true;
exports.payoutSchema = void 0;
var schema_1 = require("../schema");
var destination_1 = require("./destination");
var money_1 = require("./money");
var payoutFee_1 = require("./payoutFee");
exports.payoutSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.string)()],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.string)()],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    destination: ['destination', (0, schema_1.optional)((0, schema_1.lazy)(function () { return destination_1.destinationSchema; }))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    payoutFee: [
        'payout_fee',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return payoutFee_1.payoutFeeSchema; })))),
    ],
    arrivalDate: ['arrival_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    endToEndId: ['end_to_end_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=payout.js.map