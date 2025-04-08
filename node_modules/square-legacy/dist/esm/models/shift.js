import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { breakSchema } from './break';
import { moneySchema } from './money';
import { shiftWageSchema } from './shiftWage';
export const shiftSchema = object({
    id: ['id', optional(string())],
    employeeId: ['employee_id', optional(nullable(string()))],
    locationId: ['location_id', string()],
    timezone: ['timezone', optional(nullable(string()))],
    startAt: ['start_at', string()],
    endAt: ['end_at', optional(nullable(string()))],
    wage: ['wage', optional(lazy(() => shiftWageSchema))],
    breaks: ['breaks', optional(nullable(array(lazy(() => breakSchema))))],
    status: ['status', optional(string())],
    version: ['version', optional(number())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    declaredCashTipMoney: [
        'declared_cash_tip_money',
        optional(lazy(() => moneySchema)),
    ],
});
//# sourceMappingURL=shift.js.map