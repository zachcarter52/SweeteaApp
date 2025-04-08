"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksHelper = void 0;
const createHmacOverride_1 = require("../core/crypto/createHmacOverride");
const errors_1 = require("../errors");
/**
 * Utility to help with {@link https://developer.squareup.com/docs/webhooks/overview Square Webhooks }
 */
class WebhooksHelper {
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
    static verifySignature(_a) {
        return __awaiter(this, arguments, void 0, function* ({ requestBody, signatureHeader, signatureKey, notificationUrl }) {
            if (requestBody == null) {
                return false;
            }
            if (signatureKey == null || signatureKey.length == 0) {
                throw new errors_1.SquareError({
                    message: 'signatureKey is null or empty'
                });
            }
            if (notificationUrl == null || notificationUrl.length == 0) {
                throw new errors_1.SquareError({
                    message: 'notificationUrl is null or empty'
                });
            }
            try {
                const payload = notificationUrl + requestBody;
                const hashBase64 = yield (0, createHmacOverride_1.createHmacOverride)(payload, signatureKey);
                return hashBase64 === signatureHeader;
            }
            catch (error) {
                throw new errors_1.SquareError({
                    message: `Failed to validate webhook signature: ${error instanceof Error ? error.message : String(error)}`
                });
            }
        });
    }
}
exports.WebhooksHelper = WebhooksHelper;
