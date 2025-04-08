import { object, optional, string } from '../schema';
export const bookingCreatorDetailsSchema = object({
    creatorType: ['creator_type', optional(string())],
    teamMemberId: ['team_member_id', optional(string())],
    customerId: ['customer_id', optional(string())],
});
//# sourceMappingURL=bookingCreatorDetails.js.map