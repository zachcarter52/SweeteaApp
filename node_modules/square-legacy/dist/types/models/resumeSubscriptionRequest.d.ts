import { Schema } from '../schema';
/**
 * Defines input parameters in a request to the
 * [ResumeSubscription]($e/Subscriptions/ResumeSubscription) endpoint.
 */
export interface ResumeSubscriptionRequest {
    /** The `YYYY-MM-DD`-formatted date when the subscription reactivated. */
    resumeEffectiveDate?: string | null;
    /** Supported timings when a pending change, as an action, takes place to a subscription. */
    resumeChangeTiming?: string;
}
export declare const resumeSubscriptionRequestSchema: Schema<ResumeSubscriptionRequest>;
