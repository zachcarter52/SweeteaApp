import { nullable, object, optional, string } from '../schema';
export const listJobsRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listJobsRequest.js.map