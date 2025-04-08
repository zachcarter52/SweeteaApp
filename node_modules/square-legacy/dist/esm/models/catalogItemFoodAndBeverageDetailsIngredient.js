import { nullable, object, optional, string } from '../schema';
export const catalogItemFoodAndBeverageDetailsIngredientSchema = object({
    type: ['type', optional(string())],
    standardName: ['standard_name', optional(string())],
    customName: ['custom_name', optional(nullable(string()))],
});
//# sourceMappingURL=catalogItemFoodAndBeverageDetailsIngredient.js.map