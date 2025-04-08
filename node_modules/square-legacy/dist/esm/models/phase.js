import { bigint, nullable, object, optional, string } from '../schema';
export const phaseSchema = object({
    uid: ['uid', optional(nullable(string()))],
    ordinal: ['ordinal', optional(nullable(bigint()))],
    orderTemplateId: ['order_template_id', optional(nullable(string()))],
    planPhaseUid: ['plan_phase_uid', optional(nullable(string()))],
});
//# sourceMappingURL=phase.js.map