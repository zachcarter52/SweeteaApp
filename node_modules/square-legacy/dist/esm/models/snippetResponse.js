import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { snippetSchema } from './snippet';
export const snippetResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    snippet: ['snippet', optional(lazy(() => snippetSchema))],
});
//# sourceMappingURL=snippetResponse.js.map