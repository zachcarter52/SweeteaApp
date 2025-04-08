import { Schema } from '../schema';
import { Error } from './error';
import { Subscription } from './subscription';
import { SubscriptionAction } from './subscriptionAction';
/**
 * Defines output parameters in a request to the
 * [ChangeBillingAnchorDate]($e/Subscriptions/ChangeBillingAnchorDate) endpoint.
 */
export interface ChangeBillingAnchorDateResponse {
    /** Errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents a subscription purchased by a customer.
     * For more information, see
     * [Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
     */
    subscription?: Subscription;
    /** A list of a single billing anchor date change for the subscription. */
    actions?: SubscriptionAction[];
}
export declare const changeBillingAnchorDateResponseSchema: Schema<ChangeBillingAnchorDateResponse>;
