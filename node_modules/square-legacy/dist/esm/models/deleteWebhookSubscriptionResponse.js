import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteWebhookSubscriptionResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteWebhookSubscriptionResponse.js.map