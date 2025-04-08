import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { eventSchema } from './event';
import { eventMetadataSchema } from './eventMetadata';
export const searchEventsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    events: ['events', optional(array(lazy(() => eventSchema)))],
    metadata: ['metadata', optional(array(lazy(() => eventMetadataSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchEventsResponse.js.map