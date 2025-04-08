"use strict";
exports.__esModule = true;
exports.catalogItemFoodAndBeverageDetailsIngredientSchema = void 0;
var schema_1 = require("../schema");
exports.catalogItemFoodAndBeverageDetailsIngredientSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    standardName: ['standard_name', (0, schema_1.optional)((0, schema_1.string)())],
    customName: ['custom_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=catalogItemFoodAndBeverageDetailsIngredient.js.map