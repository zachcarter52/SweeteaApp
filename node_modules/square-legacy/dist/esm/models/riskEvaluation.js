import { object, optional, string } from '../schema';
export const riskEvaluationSchema = object({
    createdAt: ['created_at', optional(string())],
    riskLevel: ['risk_level', optional(string())],
});
//# sourceMappingURL=riskEvaluation.js.map