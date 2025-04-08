"use strict";
exports.__esModule = true;
exports.orderLineItemAppliedServiceChargeSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.orderLineItemAppliedServiceChargeSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    serviceChargeUid: ['service_charge_uid', (0, schema_1.string)()],
    appliedMoney: ['applied_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=orderLineItemAppliedServiceCharge.js.map