import { nullable, number, object, optional, string } from '../schema';
export const listCashDrawerShiftEventsRequestSchema = object({
    locationId: ['location_id', string()],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listCashDrawerShiftEventsRequest.js.map