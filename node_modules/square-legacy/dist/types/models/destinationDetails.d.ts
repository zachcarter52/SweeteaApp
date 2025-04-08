import { Schema } from '../schema';
import { DestinationDetailsCardRefundDetails } from './destinationDetailsCardRefundDetails';
import { DestinationDetailsCashRefundDetails } from './destinationDetailsCashRefundDetails';
import { DestinationDetailsExternalRefundDetails } from './destinationDetailsExternalRefundDetails';
/** Details about a refund's destination. */
export interface DestinationDetails {
    cardDetails?: DestinationDetailsCardRefundDetails;
    /** Stores details about a cash refund. Contains only non-confidential information. */
    cashDetails?: DestinationDetailsCashRefundDetails;
    /** Stores details about an external refund. Contains only non-confidential information. */
    externalDetails?: DestinationDetailsExternalRefundDetails;
}
export declare const destinationDetailsSchema: Schema<DestinationDetails>;
