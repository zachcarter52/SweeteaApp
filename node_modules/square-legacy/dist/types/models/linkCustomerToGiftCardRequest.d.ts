import { Schema } from '../schema';
/** A request to link a customer to a gift card. */
export interface LinkCustomerToGiftCardRequest {
    /** The ID of the customer to link to the gift card. */
    customerId: string;
}
export declare const linkCustomerToGiftCardRequestSchema: Schema<LinkCustomerToGiftCardRequest>;
