import { Schema } from '../schema';
import { CatalogItemFoodAndBeverageDetailsDietaryPreference } from './catalogItemFoodAndBeverageDetailsDietaryPreference';
import { CatalogItemFoodAndBeverageDetailsIngredient } from './catalogItemFoodAndBeverageDetailsIngredient';
/** The food and beverage-specific details of a `FOOD_AND_BEV` item. */
export interface CatalogItemFoodAndBeverageDetails {
    /** The calorie count (in the unit of kcal) for the `FOOD_AND_BEV` type of items. */
    calorieCount?: number | null;
    /** The dietary preferences for the `FOOD_AND_BEV` item. */
    dietaryPreferences?: CatalogItemFoodAndBeverageDetailsDietaryPreference[] | null;
    /** The ingredients for the `FOOD_AND_BEV` type item. */
    ingredients?: CatalogItemFoodAndBeverageDetailsIngredient[] | null;
}
export declare const catalogItemFoodAndBeverageDetailsSchema: Schema<CatalogItemFoodAndBeverageDetails>;
