"use strict";
exports.__esModule = true;
exports.catalogItemFoodAndBeverageDetailsSchema = void 0;
var schema_1 = require("../schema");
var catalogItemFoodAndBeverageDetailsDietaryPreference_1 = require("./catalogItemFoodAndBeverageDetailsDietaryPreference");
var catalogItemFoodAndBeverageDetailsIngredient_1 = require("./catalogItemFoodAndBeverageDetailsIngredient");
exports.catalogItemFoodAndBeverageDetailsSchema = (0, schema_1.object)({
    calorieCount: ['calorie_count', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    dietaryPreferences: [
        'dietary_preferences',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogItemFoodAndBeverageDetailsDietaryPreference_1.catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema; })))),
    ],
    ingredients: [
        'ingredients',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogItemFoodAndBeverageDetailsIngredient_1.catalogItemFoodAndBeverageDetailsIngredientSchema; })))),
    ]
});
//# sourceMappingURL=catalogItemFoodAndBeverageDetails.js.map