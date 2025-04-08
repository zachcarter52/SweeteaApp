import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteLocationCustomAttributeDefinitionResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteLocationCustomAttributeDefinitionResponse.js.map