import { boolean, number, object, optional, string } from '../schema';
export const breakTypeSchema = object({
    id: ['id', optional(string())],
    locationId: ['location_id', string()],
    breakName: ['break_name', string()],
    expectedDuration: ['expected_duration', string()],
    isPaid: ['is_paid', boolean()],
    version: ['version', optional(number())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=breakType.js.map