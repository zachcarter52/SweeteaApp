import { bigint, nullable, object, optional, string } from '../schema';
export const pauseSubscriptionRequestSchema = object({
    pauseEffectiveDate: ['pause_effective_date', optional(nullable(string()))],
    pauseCycleDuration: ['pause_cycle_duration', optional(nullable(bigint()))],
    resumeEffectiveDate: [
        'resume_effective_date',
        optional(nullable(string())),
    ],
    resumeChangeTiming: ['resume_change_timing', optional(string())],
    pauseReason: ['pause_reason', optional(nullable(string()))],
});
//# sourceMappingURL=pauseSubscriptionRequest.js.map