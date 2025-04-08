import { array, lazy, nullable, object, optional, string, } from '../schema';
import { cashDrawerDeviceSchema } from './cashDrawerDevice';
import { moneySchema } from './money';
export const cashDrawerShiftSchema = object({
    id: ['id', optional(string())],
    state: ['state', optional(string())],
    openedAt: ['opened_at', optional(nullable(string()))],
    endedAt: ['ended_at', optional(nullable(string()))],
    closedAt: ['closed_at', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    openedCashMoney: ['opened_cash_money', optional(lazy(() => moneySchema))],
    cashPaymentMoney: ['cash_payment_money', optional(lazy(() => moneySchema))],
    cashRefundsMoney: ['cash_refunds_money', optional(lazy(() => moneySchema))],
    cashPaidInMoney: ['cash_paid_in_money', optional(lazy(() => moneySchema))],
    cashPaidOutMoney: ['cash_paid_out_money', optional(lazy(() => moneySchema))],
    expectedCashMoney: ['expected_cash_money', optional(lazy(() => moneySchema))],
    closedCashMoney: ['closed_cash_money', optional(lazy(() => moneySchema))],
    device: ['device', optional(lazy(() => cashDrawerDeviceSchema))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    locationId: ['location_id', optional(string())],
    teamMemberIds: ['team_member_ids', optional(array(string()))],
    openingTeamMemberId: ['opening_team_member_id', optional(string())],
    endingTeamMemberId: ['ending_team_member_id', optional(string())],
    closingTeamMemberId: ['closing_team_member_id', optional(string())],
});
//# sourceMappingURL=cashDrawerShift.js.map