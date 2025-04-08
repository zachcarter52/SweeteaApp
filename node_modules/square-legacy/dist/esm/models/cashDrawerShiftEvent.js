import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const cashDrawerShiftEventSchema = object({
    id: ['id', optional(string())],
    eventType: ['event_type', optional(string())],
    eventMoney: ['event_money', optional(lazy(() => moneySchema))],
    createdAt: ['created_at', optional(string())],
    description: ['description', optional(nullable(string()))],
    teamMemberId: ['team_member_id', optional(string())],
});
//# sourceMappingURL=cashDrawerShiftEvent.js.map