import { nullable, object, optional, string } from '../schema';
export const eventMetadataSchema = object({
    eventId: ['event_id', optional(nullable(string()))],
    apiVersion: ['api_version', optional(nullable(string()))],
});
//# sourceMappingURL=eventMetadata.js.map