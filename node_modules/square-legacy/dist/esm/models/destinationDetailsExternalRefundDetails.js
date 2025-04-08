import { nullable, object, optional, string } from '../schema';
export const destinationDetailsExternalRefundDetailsSchema = object({
    type: ['type', string()],
    source: ['source', string()],
    sourceId: ['source_id', optional(nullable(string()))],
});
//# sourceMappingURL=destinationDetailsExternalRefundDetails.js.map