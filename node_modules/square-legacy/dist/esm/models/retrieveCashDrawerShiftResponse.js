import { array, lazy, object, optional } from '../schema';
import { cashDrawerShiftSchema } from './cashDrawerShift';
import { errorSchema } from './error';
export const retrieveCashDrawerShiftResponseSchema = object({
    cashDrawerShift: [
        'cash_drawer_shift',
        optional(lazy(() => cashDrawerShiftSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveCashDrawerShiftResponse.js.map