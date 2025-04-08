import { boolean, nullable, object, optional, string } from '../schema';
export const paymentOptionsSchema = object({
    autocomplete: ['autocomplete', optional(nullable(boolean()))],
    delayDuration: ['delay_duration', optional(nullable(string()))],
    acceptPartialAuthorization: [
        'accept_partial_authorization',
        optional(nullable(boolean())),
    ],
    delayAction: ['delay_action', optional(string())],
});
//# sourceMappingURL=paymentOptions.js.map