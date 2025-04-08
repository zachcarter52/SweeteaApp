import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyProgramSchema } from './loyaltyProgram';
export const listLoyaltyProgramsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    programs: ['programs', optional(array(lazy(() => loyaltyProgramSchema)))],
});
//# sourceMappingURL=listLoyaltyProgramsResponse.js.map