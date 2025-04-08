import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const cashDrawerShiftSummarySchema = object({
    id: ['id', optional(string())],
    state: ['state', optional(string())],
    openedAt: ['opened_at', optional(nullable(string()))],
    endedAt: ['ended_at', optional(nullable(string()))],
    closedAt: ['closed_at', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    openedCashMoney: ['opened_cash_money', optional(lazy(() => moneySchema))],
    expectedCashMoney: [
        'expected_cash_money',
        optional(lazy(() => moneySchema)),
    ],
    closedCashMoney: ['closed_cash_money', optional(lazy(() => moneySchema))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    locationId: ['location_id', optional(string())],
});
//# sourceMappingURL=cashDrawerShiftSummary.js.map