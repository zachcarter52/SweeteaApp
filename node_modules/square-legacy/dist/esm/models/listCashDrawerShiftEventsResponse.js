import { array, lazy, object, optional, string } from '../schema';
import { cashDrawerShiftEventSchema, } from './cashDrawerShiftEvent';
import { errorSchema } from './error';
export const listCashDrawerShiftEventsResponseSchema = object({
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cashDrawerShiftEvents: [
        'cash_drawer_shift_events',
        optional(array(lazy(() => cashDrawerShiftEventSchema))),
    ],
});
//# sourceMappingURL=listCashDrawerShiftEventsResponse.js.map