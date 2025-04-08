import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteBookingCustomAttributeDefinitionResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteBookingCustomAttributeDefinitionResponse.js.map