"use strict";
exports.__esModule = true;
exports.shiftSchema = void 0;
var schema_1 = require("../schema");
var break_1 = require("./break");
var money_1 = require("./money");
var shiftWage_1 = require("./shiftWage");
exports.shiftSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    employeeId: ['employee_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.string)()],
    timezone: ['timezone', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    startAt: ['start_at', (0, schema_1.string)()],
    endAt: ['end_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    wage: ['wage', (0, schema_1.optional)((0, schema_1.lazy)(function () { return shiftWage_1.shiftWageSchema; }))],
    breaks: ['breaks', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return break_1.breakSchema; }))))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    declaredCashTipMoney: [
        'declared_cash_tip_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ]
});
//# sourceMappingURL=shift.js.map