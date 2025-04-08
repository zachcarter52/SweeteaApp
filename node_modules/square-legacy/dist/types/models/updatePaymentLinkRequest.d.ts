import { Schema } from '../schema';
import { PaymentLink } from './paymentLink';
export interface UpdatePaymentLinkRequest {
    paymentLink: PaymentLink;
}
export declare const updatePaymentLinkRequestSchema: Schema<UpdatePaymentLinkRequest>;
