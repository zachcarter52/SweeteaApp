import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { cardSchema } from './card';
import { cardPaymentTimelineSchema, } from './cardPaymentTimeline';
import { deviceDetailsSchema } from './deviceDetails';
import { errorSchema } from './error';
export const cardPaymentDetailsSchema = object({
    status: ['status', optional(nullable(string()))],
    card: ['card', optional(lazy(() => cardSchema))],
    entryMethod: ['entry_method', optional(nullable(string()))],
    cvvStatus: ['cvv_status', optional(nullable(string()))],
    avsStatus: ['avs_status', optional(nullable(string()))],
    authResultCode: ['auth_result_code', optional(nullable(string()))],
    applicationIdentifier: [
        'application_identifier',
        optional(nullable(string())),
    ],
    applicationName: ['application_name', optional(nullable(string()))],
    applicationCryptogram: [
        'application_cryptogram',
        optional(nullable(string())),
    ],
    verificationMethod: ['verification_method', optional(nullable(string()))],
    verificationResults: ['verification_results', optional(nullable(string()))],
    statementDescription: ['statement_description', optional(nullable(string()))],
    deviceDetails: ['device_details', optional(lazy(() => deviceDetailsSchema))],
    cardPaymentTimeline: [
        'card_payment_timeline',
        optional(lazy(() => cardPaymentTimelineSchema)),
    ],
    refundRequiresCardPresence: [
        'refund_requires_card_presence',
        optional(nullable(boolean())),
    ],
    errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
});
//# sourceMappingURL=cardPaymentDetails.js.map