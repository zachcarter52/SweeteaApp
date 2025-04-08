"use strict";
exports.__esModule = true;
exports.quantityRatioSchema = void 0;
var schema_1 = require("../schema");
exports.quantityRatioSchema = (0, schema_1.object)({
    quantity: ['quantity', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    quantityDenominator: ['quantity_denominator', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=quantityRatio.js.map