import { lazy, nullable, object, optional, string } from '../schema';
import { confirmationDecisionSchema, } from './confirmationDecision';
export const confirmationOptionsSchema = object({
    title: ['title', string()],
    body: ['body', string()],
    agreeButtonText: ['agree_button_text', string()],
    disagreeButtonText: ['disagree_button_text', optional(nullable(string()))],
    decision: ['decision', optional(lazy(() => confirmationDecisionSchema))],
});
//# sourceMappingURL=confirmationOptions.js.map