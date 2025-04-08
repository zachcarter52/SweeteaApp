import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteCustomerCustomAttributeDefinitionResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteCustomerCustomAttributeDefinitionResponse.js.map