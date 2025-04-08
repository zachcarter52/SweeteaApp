import { nullable, number, object, optional, string } from '../schema';
export const listBookingsRequestSchema = object({
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
    customerId: ['customer_id', optional(nullable(string()))],
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    startAtMin: ['start_at_min', optional(nullable(string()))],
    startAtMax: ['start_at_max', optional(nullable(string()))],
});
//# sourceMappingURL=listBookingsRequest.js.map