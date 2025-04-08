import { lazy, object } from '../schema';
import { snippetSchema } from './snippet';
export const upsertSnippetRequestSchema = object({
    snippet: ['snippet', lazy(() => snippetSchema)],
});
//# sourceMappingURL=upsertSnippetRequest.js.map