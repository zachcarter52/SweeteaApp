import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteMerchantCustomAttributeDefinitionResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteMerchantCustomAttributeDefinitionResponse.js.map