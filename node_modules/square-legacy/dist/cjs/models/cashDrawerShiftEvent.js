"use strict";
exports.__esModule = true;
exports.cashDrawerShiftEventSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.cashDrawerShiftEventSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    eventType: ['event_type', (0, schema_1.optional)((0, schema_1.string)())],
    eventMoney: ['event_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=cashDrawerShiftEvent.js.map