import { object, optional, string } from '../schema';
export const eventTypeMetadataSchema = object({
    eventType: ['event_type', optional(string())],
    apiVersionIntroduced: ['api_version_introduced', optional(string())],
    releaseStatus: ['release_status', optional(string())],
});
//# sourceMappingURL=eventTypeMetadata.js.map