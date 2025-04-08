import { lazy, object, optional } from '../schema';
import { destinationDetailsCardRefundDetailsSchema, } from './destinationDetailsCardRefundDetails';
import { destinationDetailsCashRefundDetailsSchema, } from './destinationDetailsCashRefundDetails';
import { destinationDetailsExternalRefundDetailsSchema, } from './destinationDetailsExternalRefundDetails';
export const destinationDetailsSchema = object({
    cardDetails: [
        'card_details',
        optional(lazy(() => destinationDetailsCardRefundDetailsSchema)),
    ],
    cashDetails: [
        'cash_details',
        optional(lazy(() => destinationDetailsCashRefundDetailsSchema)),
    ],
    externalDetails: [
        'external_details',
        optional(lazy(() => destinationDetailsExternalRefundDetailsSchema)),
    ],
});
//# sourceMappingURL=destinationDetails.js.map