import { Schema } from '../schema';
/** Provides information about the subscription event. */
export interface SubscriptionEventInfo {
    /** A human-readable explanation for the event. */
    detail?: string | null;
    /** Supported info codes of a subscription event. */
    code?: string;
}
export declare const subscriptionEventInfoSchema: Schema<SubscriptionEventInfo>;
