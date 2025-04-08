import { nullable, object, optional, string } from '../schema';
export const retrieveSubscriptionRequestSchema = object({ include: ['include', optional(nullable(string()))] });
//# sourceMappingURL=retrieveSubscriptionRequest.js.map