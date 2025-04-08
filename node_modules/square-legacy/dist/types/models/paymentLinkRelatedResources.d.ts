import { Schema } from '../schema';
import { CatalogObject } from './catalogObject';
import { Order } from './order';
export interface PaymentLinkRelatedResources {
    /** The order associated with the payment link. */
    orders?: Order[] | null;
    /** The subscription plan associated with the payment link. */
    subscriptionPlans?: CatalogObject[] | null;
}
export declare const paymentLinkRelatedResourcesSchema: Schema<PaymentLinkRelatedResources>;
