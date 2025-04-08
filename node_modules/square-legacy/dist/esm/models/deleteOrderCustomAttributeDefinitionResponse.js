import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteOrderCustomAttributeDefinitionResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteOrderCustomAttributeDefinitionResponse.js.map