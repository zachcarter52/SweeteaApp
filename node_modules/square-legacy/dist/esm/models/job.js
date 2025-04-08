import { boolean, nullable, number, object, optional, string, } from '../schema';
export const jobSchema = object({
    id: ['id', optional(string())],
    title: ['title', optional(nullable(string()))],
    isTipEligible: ['is_tip_eligible', optional(nullable(boolean()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    version: ['version', optional(number())],
});
//# sourceMappingURL=job.js.map