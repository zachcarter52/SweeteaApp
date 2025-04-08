import { nullable, number, object, optional, string } from '../schema';
export const subscriptionTestResultSchema = object({
    id: ['id', optional(string())],
    statusCode: ['status_code', optional(nullable(number()))],
    payload: ['payload', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=subscriptionTestResult.js.map