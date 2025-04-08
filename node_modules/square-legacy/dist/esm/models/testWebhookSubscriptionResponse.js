import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { subscriptionTestResultSchema, } from './subscriptionTestResult';
export const testWebhookSubscriptionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscriptionTestResult: [
        'subscription_test_result',
        optional(lazy(() => subscriptionTestResultSchema)),
    ],
});
//# sourceMappingURL=testWebhookSubscriptionResponse.js.map