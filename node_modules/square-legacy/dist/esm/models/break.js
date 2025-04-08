import { boolean, nullable, object, optional, string } from '../schema';
export const breakSchema = object({
    id: ['id', optional(string())],
    startAt: ['start_at', string()],
    endAt: ['end_at', optional(nullable(string()))],
    breakTypeId: ['break_type_id', string()],
    name: ['name', string()],
    expectedDuration: ['expected_duration', string()],
    isPaid: ['is_paid', boolean()],
});
//# sourceMappingURL=break.js.map