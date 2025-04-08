"use strict";
exports.__esModule = true;
exports.cashDrawerShiftSummarySchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.cashDrawerShiftSummarySchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    openedAt: ['opened_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    endedAt: ['ended_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    closedAt: ['closed_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    openedCashMoney: ['opened_cash_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    expectedCashMoney: [
        'expected_cash_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    closedCashMoney: ['closed_cash_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=cashDrawerShiftSummary.js.map