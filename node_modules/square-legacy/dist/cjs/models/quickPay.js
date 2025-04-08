"use strict";
exports.__esModule = true;
exports.quickPaySchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.quickPaySchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.string)()],
    priceMoney: ['price_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    locationId: ['location_id', (0, schema_1.string)()]
});
//# sourceMappingURL=quickPay.js.map