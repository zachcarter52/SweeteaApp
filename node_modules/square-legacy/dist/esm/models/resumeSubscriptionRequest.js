import { nullable, object, optional, string } from '../schema';
export const resumeSubscriptionRequestSchema = object({
    resumeEffectiveDate: [
        'resume_effective_date',
        optional(nullable(string())),
    ],
    resumeChangeTiming: ['resume_change_timing', optional(string())],
});
//# sourceMappingURL=resumeSubscriptionRequest.js.map