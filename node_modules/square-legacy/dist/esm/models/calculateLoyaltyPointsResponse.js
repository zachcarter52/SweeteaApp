import { array, lazy, number, object, optional } from '../schema';
import { errorSchema } from './error';
export const calculateLoyaltyPointsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    points: ['points', optional(number())],
    promotionPoints: ['promotion_points', optional(number())],
});
//# sourceMappingURL=calculateLoyaltyPointsResponse.js.map