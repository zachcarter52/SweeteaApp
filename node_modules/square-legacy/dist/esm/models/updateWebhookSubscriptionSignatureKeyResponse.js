import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const updateWebhookSubscriptionSignatureKeyResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    signatureKey: ['signature_key', optional(string())],
});
//# sourceMappingURL=updateWebhookSubscriptionSignatureKeyResponse.js.map