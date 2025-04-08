import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyProgramSchema } from './loyaltyProgram';
export const retrieveLoyaltyProgramResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    program: ['program', optional(lazy(() => loyaltyProgramSchema))],
});
//# sourceMappingURL=retrieveLoyaltyProgramResponse.js.map