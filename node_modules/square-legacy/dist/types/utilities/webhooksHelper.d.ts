/**
 * Utility to help with {@link https://developer.squareup.com/docs/webhooks/overview Square Webhooks }
 */
export declare class WebhooksHelper {
    /**
     * Verifies and validates an event notification.
     * See the {@link https://developer.squareup.com/docs/webhooks/step3validate documentation} for more details.
     *
     * @param requestBody       The JSON body of the request.
     * @param signatureHeader   The value for the `x-square-hmacsha256-signature` header.
     * @param signatureKey      The signature key from the {@link https://developer.squareup.com/apps Square Developer portal} for the webhook subscription.
     * @param notificationUrl   The notification endpoint URL as defined in the {@link https://developer.squareup.com/apps Square Developer portal} for the webhook subscription.
     * @returns                 `true` if the signature is valid, indicating that the event can be trusted as it came from Square. `false` if the signature validation fails, indicating that the event did not come from Square, so it may be malicious and should be discarded.
     */
    static isValidWebhookEventSignature(requestBody: string, signatureHeader: string, signatureKey: string, notificationUrl: string): boolean;
}
