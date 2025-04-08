import { nullable, object, optional, string } from '../schema';
export const subscriptionEventInfoSchema = object({
    detail: ['detail', optional(nullable(string()))],
    code: ['code', optional(string())],
});
//# sourceMappingURL=subscriptionEventInfo.js.map