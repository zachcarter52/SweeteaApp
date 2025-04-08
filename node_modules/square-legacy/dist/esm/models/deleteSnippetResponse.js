import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteSnippetResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteSnippetResponse.js.map