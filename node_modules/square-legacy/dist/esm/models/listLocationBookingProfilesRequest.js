import { nullable, number, object, optional, string } from '../schema';
export const listLocationBookingProfilesRequestSchema = object({
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listLocationBookingProfilesRequest.js.map