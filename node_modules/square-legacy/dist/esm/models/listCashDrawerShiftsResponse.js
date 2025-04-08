import { array, lazy, object, optional, string } from '../schema';
import { cashDrawerShiftSummarySchema, } from './cashDrawerShiftSummary';
import { errorSchema } from './error';
export const listCashDrawerShiftsResponseSchema = object({
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cashDrawerShifts: [
        'cash_drawer_shifts',
        optional(array(lazy(() => cashDrawerShiftSummarySchema))),
    ],
});
//# sourceMappingURL=listCashDrawerShiftsResponse.js.map