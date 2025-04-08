import { boolean, object, optional } from '../schema';
export const confirmationDecisionSchema = object({
    hasAgreed: ['has_agreed', optional(boolean())],
});
//# sourceMappingURL=confirmationDecision.js.map