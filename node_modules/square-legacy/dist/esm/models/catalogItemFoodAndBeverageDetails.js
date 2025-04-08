import { array, lazy, nullable, number, object, optional, } from '../schema';
import { catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema, } from './catalogItemFoodAndBeverageDetailsDietaryPreference';
import { catalogItemFoodAndBeverageDetailsIngredientSchema, } from './catalogItemFoodAndBeverageDetailsIngredient';
export const catalogItemFoodAndBeverageDetailsSchema = object({
    calorieCount: ['calorie_count', optional(nullable(number()))],
    dietaryPreferences: [
        'dietary_preferences',
        optional(nullable(array(lazy(() => catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema)))),
    ],
    ingredients: [
        'ingredients',
        optional(nullable(array(lazy(() => catalogItemFoodAndBeverageDetailsIngredientSchema)))),
    ],
});
//# sourceMappingURL=catalogItemFoodAndBeverageDetails.js.map