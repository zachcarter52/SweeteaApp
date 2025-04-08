"use strict";
exports.__esModule = true;
exports.giftCardActivityImportSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.giftCardActivityImportSchema = (0, schema_1.object)({ amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })] });
//# sourceMappingURL=giftCardActivityImport.js.map