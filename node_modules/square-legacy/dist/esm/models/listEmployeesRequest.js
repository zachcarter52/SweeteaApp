import { nullable, number, object, optional, string } from '../schema';
export const listEmployeesRequestSchema = object({
    locationId: ['location_id', optional(nullable(string()))],
    status: ['status', optional(string())],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listEmployeesRequest.js.map