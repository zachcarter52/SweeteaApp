import { lazy, number, object, optional, string } from '../schema';
import { shiftQuerySchema } from './shiftQuery';
export const searchShiftsRequestSchema = object({
    query: ['query', optional(lazy(() => shiftQuerySchema))],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchShiftsRequest.js.map