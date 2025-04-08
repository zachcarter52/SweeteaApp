"use strict";
exports.__esModule = true;
exports.WebhooksHelper = void 0;
var tslib_1 = require("tslib");
var crypto_1 = tslib_1.__importDefault(require("crypto"));
/**
 * Utility to help with {@link https://developer.squareup.com/docs/webhooks/overview Square Webhooks }
 */
var WebhooksHelper = /** @class */ (function () {
    function WebhooksHelper() {
    }
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
    WebhooksHelper.isValidWebhookEventSignature = function (requestBody, signatureHeader, signatureKey, notificationUrl) {
        if (requestBody == null) {
            return false;
        }
        if (signatureKey == null || signatureKey.length == 0) {
            throw new Error('signatureKey is null or empty');
        }
        if (notificationUrl == null || notificationUrl.length == 0) {
            throw new Error('notificationUrl is null or empty');
        }
        // Perform UTF-8 encoding to bytes
        var payloadBytes = Buffer.from(notificationUrl + requestBody, 'utf-8');
        var signatureKeyBytes = Buffer.from(signatureKey, 'utf-8');
        // Compute the hash value
        var hmac = crypto_1["default"].createHmac('sha256', signatureKeyBytes);
        hmac.update(payloadBytes);
        // Compare the computed hash vs the value in the signature header
        var hashBase64 = hmac.digest('base64');
        return hashBase64 === signatureHeader;
    };
    return WebhooksHelper;
}());
exports.WebhooksHelper = WebhooksHelper;
//# sourceMappingURL=webhooksHelper.js.map